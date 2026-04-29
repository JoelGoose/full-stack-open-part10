import theme from "../theme";
import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.blueBackground,
    alignItems: "center",
    borderRadius: 5,
    padding: 15,
    margin: 5,
  },
  text: {
    color: "white",
  },
});

const Button = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text fontSize="heading" style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
