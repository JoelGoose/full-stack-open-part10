import { FlatList, Text } from "react-native";
import RepositoryReviewItem from "./SingleRepository/RepositoryReviewItem";
import useUser from "../hooks/useUser";

const UserReviews = () => {
  const { user, loading } = useUser(true);
  if (loading || !user) {
    return <Text>Loading...</Text>;
  }

  const reviews = user.reviews.edges.map((edge) => edge.node);
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <RepositoryReviewItem review={item} />}
      keyExtractor={({ repositoryId }) => repositoryId}
    />
  );
};

export default UserReviews;
