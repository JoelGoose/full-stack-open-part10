import { useParams } from "react-router-native";
import { View } from "react-native";
import useRepository from "../../hooks/useRepository";
import RepositoryItem from "../RepositoryItem";

const SingleRepository = () => {
  const { repositoryId } = useParams();
  const { repository } = useRepository(repositoryId);

  return (
    <View>
      {repository && (
        <RepositoryItem repository={repository} showGithubButton />
      )}
    </View>
  );
};

export default SingleRepository;
