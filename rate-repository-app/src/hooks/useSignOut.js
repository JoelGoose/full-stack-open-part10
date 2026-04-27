import useAuthStorage from "./useAuthStorage"
import { useApolloClient } from "@apollo/client/react";

const useSignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    console.log('user logged out')
  }
  return signOut
}

export default useSignOut;