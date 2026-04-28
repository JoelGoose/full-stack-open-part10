import { View, StyleSheet } from "react-native";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.repositoryDescription,
  },
  languageTag: {
    backgroundColor: theme.colors.blueBackground,
    color: "#ffffff",
    alignSelf: "flex-start",
    borderRadius: 5,
    padding: 4,
  },
  container: {
    padding: 3,
    gap: 3,
  },
});

const RepositoryDescription = ({ repository }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="heading">
        {repository.fullName}
      </Text>
      <Text style={styles.text}>{repository.description}</Text>
      <Text style={styles.languageTag}>{repository.language}</Text>
    </View>
  );
};

export default RepositoryDescription;
