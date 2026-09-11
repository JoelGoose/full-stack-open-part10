import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client/react'

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection }) => {
  const [repositories, setRepositories] = useState();
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy: orderBy, orderDirection: orderDirection },
    fetchPolicy: 'cache-and-network'
  });

  useEffect(() => {
    if (data?.repositories) {
      setRepositories(data.repositories)
    }
  }, [data]);

  return { repositories, loading, error };
};

export default useRepositories;