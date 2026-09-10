import { View, Text, StyleSheet } from "react-native";
import { format } from "date-fns";
import theme from "../../theme";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.itemBackground,
    flexDirection: "row",
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
});

const RepositoryReviewItem = ({ review }) => {
  return (
    <View style={styles.mainContainer} key={review.id}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.userText}>{review.user.username}</Text>
        <Text style={styles.dateText}>
          {format(review.createdAt, "dd/MM/yyyy")}
        </Text>
        <Text style={styles.contentText}>{review.text}</Text>
      </View>
    </View>
  );
};

export default RepositoryReviewItem;
