import { View, StyleSheet, ScrollView } from "react-native";
import theme from "../../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBar,
    padding: 12
  },
  scrollContainer: {
    flexDirection: "row",
    gap: 10
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <AppBarTab title={"Repositories"} linkTo={"/"}/>
        <AppBarTab title={"Sign In"} linkTo={"/signIn"}/>
      </ScrollView>
    </View>
  );
};

export default AppBar;
