import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client/react'

import { GET_USER } from '../graphql/queries';

const useUser = () => {
  const [user, setUser] = useState();

  const { loading, error, data } = useQuery(GET_USER, {
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