import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from 'react-router-native';
import Constants from "expo-constants";
import AppBarTab from './AppBarTab';
import theme from "../theme";
import { useQuery } from '@apollo/react-hooks';
import { AUTHORIZED_USER } from '../graphql/queries';

import useSignOut from '../hooks/useSignOut';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#24292e',
    paddingBottom: 15,
    paddingTop: 40,
  },
  scrollView: {
    marginHorizontal: 0,
  },
  text: {
    color: 'white',
    marginRight: 10,
  }
});

const AppBar = () => {
  const { data } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
  });

  let authorizedUser = data ? data.authorizedUser : null;
  const signOut = useSignOut();

  console.log('from ---> AppBar - authorizedUser', authorizedUser);


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal >
        <AppBarTab link='/' label='Repositories' />
        {!authorizedUser && <AppBarTab link='/signIn' label='Sign in' />}
        {authorizedUser && <AppBarTab label='Sign out' onPress={() => signOut()} />}
      </ScrollView>
    </View>
  );
};

export default AppBar;


// return (
//   <View style={styles.container}>
//     <ScrollView horizontal style={styles.tabsContainer}>
//       <Link to='/' component={AppBarTab}>Repositories</Link>
//       <Link to='/signin' component={AppBarTab}>Sign in</Link>
//       <Link to='/signout' component={AppBarTab}>Sign out</Link>
//     </ScrollView>
//   </View>
// );
// };

// export default AppBar;