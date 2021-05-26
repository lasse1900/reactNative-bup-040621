import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { SIGN_IN } from '../graphql/mutations';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useHistory } from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const history = useHistory();
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);

  const signIn = async ({ username, password }) => {

    console.log('useSignIn - credentials', username, password);
    const token = await AsyncStorage.getItem(`${this.namespace}:token`);
    console.log('useSignIn - token ->', token);

    try {
      const { data } = await mutate({
        variables: { username: username, password: password },
      });
      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();

      history.push('/');
      return { data };
    } catch (error) {
      console.log(error);
    }
  };

  return [signIn, result];
};

export default useSignIn;