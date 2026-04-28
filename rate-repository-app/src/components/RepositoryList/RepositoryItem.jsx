import { View, StyleSheet, Image } from "react-native";
import theme from "../../theme";
import RepositoryDescription from "./RepositoryDescription";
import RepositoryStats from "./RepositoryStats";

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
    padding: 5,
  },
});

const RepositoryItem = ({ repository }) => {
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
    </View>
  );
};

export default RepositoryItem;
