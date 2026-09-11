import { useQuery } from "@apollo/client/react";
import { useEffect, useState } from "react";
import { GET_REVIEWS } from "../graphql/queries";

const useReviews = (id) => {
  const [reviews, setReviews] = useState();

  const { data } = useQuery(GET_REVIEWS, {
    variables: { id: id },
    fetchPolicy: 'cache-and-network'
  })

  useEffect(() => {
    if (data) {
      setReviews(data.repository?.reviews)
    }
  }, [data])

  return { reviews }
}

export default useReviews