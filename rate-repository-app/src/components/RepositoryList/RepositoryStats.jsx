import { StyleSheet, View } from "react-native"
import Text from "../Text"
import theme from "../../theme"

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    color: theme.colors.repositoryDescription
  },
  number: {
    color: 'black',
    fontWeight: 'bold'
  } 
})

const parseCount = (count) => {
  if (count <= 1000) return count
  // 1. Divide by 100 (21553 -> 215.53)
  // 2. Math.round (215.53 -> 216)
  // 3. Divide by 10 (216 -> 21.6)
  // 4. Append 'k'
  return Math.round(count / 100) / 10 + 'k'
}

// could further separate into different components 
const RepositoryStats = ({ repository }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemContainer}>
        <Text style={styles.number}>{parseCount(repository.stargazersCount)}</Text>
        <Text fontWeight='bold' style={styles.text}>Stars</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.number}>{parseCount(repository.forksCount)}</Text>
        <Text fontWeight='bold' style={styles.text}>Forks</Text>
      </View>      
      <View style={styles.itemContainer}>
        <Text style={styles.number}>{parseCount(repository.reviewCount)}</Text>
        <Text fontWeight='bold' style={styles.text}>Reviews</Text>
      </View>      
      <View style={styles.itemContainer}>
        <Text style={styles.number}>{parseCount(repository.ratingAverage)}</Text>
        <Text fontWeight='bold' style={styles.text}>Rating</Text>
      </View>      
    </View>
  )
}

export default RepositoryStats