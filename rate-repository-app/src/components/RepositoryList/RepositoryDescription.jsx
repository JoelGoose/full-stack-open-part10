import { View, StyleSheet } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
  text: {
    color: "#676565",
  },
});

const RepositoryDescription = ({ repository }) => {
  return (
    <View>
      <Text fontWeight="bold" fontSize="heading">
        {repository.fullName}
      </Text>
      <Text style={styles.text}>{repository.description}</Text>
      <Text>{repository.language}</Text>
    </View>
  );
};

export default RepositoryDescription;
