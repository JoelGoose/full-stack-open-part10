import { Text, Pressable, StyleSheet } from "react-native";
import theme from "../../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.appBarText,
  },
  // ...
});

const AppBarTab = ({ title, linkTo, onPress }) => {
  if (onPress && !linkTo) {
    return (
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable>
      <Link to={linkTo}>
        <Text style={styles.text}>{title}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
