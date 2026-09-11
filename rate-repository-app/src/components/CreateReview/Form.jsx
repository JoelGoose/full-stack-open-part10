import { StyleSheet, TextInput, View } from "react-native";
import Text from "../Text";
import { useFormik } from "formik";
import * as yup from "yup";
import theme from "../../theme";
import { useNavigate } from "react-router-native";
import useCreateReview from "../../hooks/useCreateReview";
import Button from "../Button";

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
    borderColor: theme.colors.redError,
  },
  errorText: {
    color: theme.colors.redError,
  },
});

const initialValues = {
  repositoryOwnerName: "",
  repositoryName: "",
  rating: "",
  review: "",
};

const validationSchema = yup.object().shape({
  repositoryOwnerName: yup
    .string()
    .required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .max(100)
    .min(0)
    .typeError("Must be a number"),
  review: yup.string(),
});

export const CreateReviewContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={[
          styles.input,
          formik.touched.repositoryOwnerName &&
            formik.errors.repositoryOwnerName &&
            styles.inputError,
        ]}
        placeholder="Repository owner name"
        value={formik.values.repositoryOwnerName}
        onChangeText={formik.handleChange("repositoryOwnerName")}
        onBlur={formik.handleBlur("repositoryOwnerName")}
      />
      {formik.touched.repositoryOwnerName &&
        formik.errors.repositoryOwnerName && (
          <Text style={styles.errorText}>
            {formik.errors.repositoryOwnerName}
          </Text>
        )}
      <TextInput
        style={[
          styles.input,
          formik.touched.repositoryName &&
            formik.errors.repositoryName &&
            styles.inputError,
        ]}
        placeholder="Repository name"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange("repositoryName")}
        onBlur={formik.handleBlur("repositoryName")}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={styles.errorText}>{formik.errors.repositoryName}</Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.touched.rating && formik.errors.rating && styles.inputError,
        ]}
        placeholder="Rating between 0 and 100"
        value={formik.values.rating}
        onChangeText={formik.handleChange("rating")}
        onBlur={formik.handleBlur("rating")}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={styles.errorText}>{formik.errors.rating}</Text>
      )}
      <TextInput
        style={[styles.input, formik.touched.review]}
        placeholder="Review"
        value={formik.values.review}
        onChangeText={formik.handleChange("review")}
        onBlur={formik.handleBlur("review")}
        multiline
      />
      <Button title={"Create a review"} onPress={formik.handleSubmit} />
    </View>
  );
};

const CreateReviewForm = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const { repositoryOwnerName, repositoryName, rating, review } = values;
    try {
      const data = await createReview({
        ownerName: repositoryOwnerName,
        repositoryName,
        rating: Number(rating),
        text: review,
      });
      navigate(`/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReviewForm;
