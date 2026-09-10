import { useParams } from "react-router-native";
import { FlatList, Text } from "react-native";
import useRepository from "../../hooks/useRepository";
import useReviews from "../../hooks/useReviews";
import RepositoryView from "./RepositoryView";
import RepositoryReviewItem from "./RepositoryReviewItem";

const SingleRepository = () => {
  const { repositoryId } = useParams();
  const { repository } = useRepository(repositoryId);
  const { reviews } = useReviews(repositoryId);

  if (!reviews) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={reviews.edges.map((edge) => edge.node)}
      renderItem={({ item }) => <RepositoryReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryView repository={repository} />}
    />
  );
};

export default SingleRepository;
