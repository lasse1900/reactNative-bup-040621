import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { SIGN_IN } from '../graphql/mutations';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useHistory } from 'react-router-native';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useContext(AuthStorageContext);
  const history = useHistory();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const { payload } = await mutate({ variables: { credentials: { username, password } } });
    await authStorage.setAccessToken(payload.authorize.accessToken);
    // const token = await authStorage.setAccessToken(payload.authorize.accessToken);
    // console.log('---> token', token);
    apolloClient.resetStore();
    history.push('/');
    return payload;
  };
  return [signIn, result];
};

export default useSignIn;