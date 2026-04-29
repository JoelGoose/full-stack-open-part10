import { useQuery } from "@apollo/client/react";
import { useEffect, useState } from "react"
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const [repository, setRepository] = useState();

  const { data } = useQuery(GET_REPOSITORY, {
    variables: { id: id },
    fetchPolicy: 'cache-and-network'
  })

  useEffect(() => {
    if (data) {
      setRepository(data.repository)
    }
  }, [data])

  return { repository }
}

export default useRepository