import Text from './Text';
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { useFormik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';

const styles = StyleSheet.create({
  mainContainer: {
    padding: 15,
    backgroundColor: theme.colors.itemBackground,
    gap: 15,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    paddingLeft: 15,
  },
  inputError: {
    borderColor: theme.colors.redError
  },  
  button: {
    backgroundColor: theme.colors.blueBackground,
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
  },
  text: {
    color: 'white',
  },
  errorText: {
    color: theme.colors.redError
  }
})


const initialValues = {
  username: '',
  password: ''
}

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  
  password: yup
    .string()
    .required('Password is required')
})


const SignIn = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })
  
  return (
    <View style={styles.mainContainer}>
      <TextInput style={[
          styles.input,
          formik.touched.username && formik.errors.username && styles.inputError
        ]} 
        placeholder='username' 
        value={formik.values.username} 
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorText}>{formik.errors.username}</Text>
      )}
      <TextInput style={[
          styles.input,
          formik.touched.password && formik.errors.password && styles.inputError
        ]} 
        placeholder='password' 
        secureTextEntry value={formik.values.password} 
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}  
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}
      <Pressable style={styles.button}onPress={formik.handleSubmit}>
        <Text fontSize='heading' style={styles.text}>Sign in</Text>
      </Pressable>
    </View>
  )
};

export default SignIn;