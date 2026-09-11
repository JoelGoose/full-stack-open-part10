import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client/react'

import { GET_USER } from '../graphql/queries';

const useUser = (includeReviews = false) => {
  const [user, setUser] = useState();

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { includeReviews: includeReviews },
    fetchPolicy: 'cache-and-network'
  });

  useEffect(() => {
    if (data) {
      setUser(data.me)
    }
  }, [data]);

  return { user, loading, error };
};

export default useUser;