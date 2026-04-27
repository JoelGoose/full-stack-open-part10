import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client/react'

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
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