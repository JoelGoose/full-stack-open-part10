import { Text, View, StyleSheet, Image } from "react-native";
import theme from "../../theme";
import RepositoryDescription from "./RepositoryDescription";
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.repositoryBackground,
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
});

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topMainContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: repository.ownerAvatarUrl }}
        />
        <View style={styles.topSecondContainer}>
          <RepositoryDescription repository={repository} />
        </View>
      </View>

      <Text>Stars: {repository.stargazersCount}</Text>
      <Text>Forks: {repository.forksCount}</Text>
      <Text>Reviews: {repository.reviewCount}</Text>
      <Text>Rating: {repository.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
