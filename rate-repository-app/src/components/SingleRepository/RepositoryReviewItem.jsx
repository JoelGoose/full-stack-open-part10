import { View, Text, StyleSheet, Alert } from "react-native";
import { format } from "date-fns";
import theme from "../../theme";
import Button from "../Button";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../../hooks/useDeleteReview";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.itemBackground,
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
  ratingContainer: {
    borderColor: theme.colors.blueBackground,
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginRight: 8,
  },
  contentContainer: {
    flex: 1,
  },
  ratingText: {
    color: theme.colors.blueBackground,
    fontSize: 30,
    fontWeight: "bold",
  },
  userText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  dateText: {
    color: theme.colors.repositoryDescription,
  },
  buttonsContainer: {
    flexBasis: "100%",
    width: "100%",
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  deleteButton: {
    backgroundColor: "red",
  },
});

const MyReviewsActions = ({ repositoryId, id, refetch }) => {
  const [deleteReview] = useDeleteReview();
  const navigate = useNavigate();

  const handleViewRepository = () => {
    navigate(`/${repositoryId}`);
  };

  const handleDeleteReview = async () => {
    console.log(`${id}`);
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            try {
              await deleteReview({
                deleteReviewId: id,
              });
              refetch();
            } catch (e) {
              console.log(e);
            }
          },
        },
      ],
    );
  };

  return (
    <View style={styles.buttonsContainer}>
      <Button
        title={"View repository"}
        onPress={handleViewRepository}
        style={styles.button}
      />
      <Button
        title={"Delete review"}
        onPress={handleDeleteReview}
        style={[styles.button, styles.deleteButton]}
      />
    </View>
  );
};

const RepositoryReviewItem = ({ review, myReviews, refetch }) => {
  return (
    <View style={styles.mainContainer} key={review.id}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.userText}>
          {review.user?.username ?? review.repositoryId}
        </Text>
        <Text style={styles.dateText}>
          {format(review.createdAt, "dd/MM/yyyy")}
        </Text>
        <Text style={styles.contentText}>{review.text}</Text>
      </View>
      {myReviews && (
        <MyReviewsActions
          repositoryId={review.repositoryId}
          id={review.id}
          refetch={refetch}
        />
      )}
    </View>
  );
};

export default RepositoryReviewItem;
