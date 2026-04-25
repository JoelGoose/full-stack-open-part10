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

const AppBarTab = ({ title, linkTo }) => {
  return (
    <Pressable
      onPress={() => {
        console.log(`Pressed ${title}`);
      }}
    >
      <Link to={linkTo}>
        <Text style={styles.text}>{title}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
