import { View, StyleSheet, Image } from "react-native";
import * as Linking from "expo-linking";
import theme from "../theme";
import RepositoryDescription from "./RepositoryList/RepositoryDescription";
import RepositoryStats from "./RepositoryList/RepositoryStats";
import Button from "./Button";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.itemBackground,
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  topMainContainer: {
    flexDirection: "row",
  },
  topSecondContainer: {
    flex: 1,
    marginLeft: 5,
  },
  bottomContainer: {
    padding: 10,
  },
  // stylesheet copied from SignIn, should be moved to theme?
  // better would be to even create own component for the button!
  button: {
    backgroundColor: theme.colors.blueBackground,
    alignItems: "center",
    borderRadius: 5,
    padding: 15,
  },
});

const RepositoryItem = ({ repository, showGithubButton }) => {
  const onPress = () => {
    Linking.openURL(repository.url);
  };

  return (
    <View testID="repositoryItem" style={styles.mainContainer}>
      <View style={styles.topMainContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: repository.ownerAvatarUrl }}
        />
        <View style={styles.topSecondContainer}>
          <RepositoryDescription repository={repository} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <RepositoryStats repository={repository} />
      </View>
      {showGithubButton && (
        <Button title={"Open in GitHub"} onPress={onPress} />
      )}
    </View>
  );
};

export default RepositoryItem;
