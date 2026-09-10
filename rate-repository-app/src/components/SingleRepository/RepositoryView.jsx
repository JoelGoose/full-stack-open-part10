import { View } from "react-native";
import RepositoryItem from "./RepositoryItem";

const RepositoryView = ({ repository }) => {
  return (
    <View>
      {repository && (
        <RepositoryItem repository={repository} showGithubButton />
      )}
    </View>
  );
};

export default RepositoryView;
