import { Text, Pressable, StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.appBarText,
    padding: 5,
  },
  // ...
});

const AppBarTab = ({ title }) => {
  return (
    <Pressable
      onPress={() => {
        console.log(`Pressed ${title}`);
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default AppBarTab;
