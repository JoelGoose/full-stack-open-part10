import { View, StyleSheet, ScrollView } from "react-native";
import theme from "../../theme";
import AppBarTab from "./AppBarTab";
import useUser from "../../hooks/useUser";
import useSignOut from "../../hooks/useSignOut";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBar,
    padding: 12,
  },
  scrollContainer: {
    flexDirection: "row",
    gap: 10,
  },
});

const AppBar = () => {
  const { user } = useUser();
  const signOut = useSignOut();

  const isLoggedIn = (user) => {
    return user?.id && user?.username;
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <AppBarTab title={"Repositories"} linkTo={"/"} />
        {isLoggedIn(user) ? (
          <>
            <AppBarTab title={"Create a review"} linkTo={"/createReview"} />
            <AppBarTab title={"My reviews"} linkTo={"/myReviews"} />
            <AppBarTab title={"Sign Out"} onPress={handleSignOut} />
          </>
        ) : (
          <>
            <AppBarTab title={"Sign In"} linkTo={"/signIn"} />
            <AppBarTab title={"Sign Up"} linkTo={"/signUp"} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
