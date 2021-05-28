import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from 'react-router-native';
import Constants from "expo-constants";
import AppBarTab from './AppBarTab';
import theme from "../theme";
import { useQuery } from '@apollo/react-hooks';
import { AUTHORIZED_USER } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    alignItems: "flex-end",
    backgroundColor: theme.appBar.backgroundColor
  },
  tabsContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const AppBar = () => {
  const { data } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
  });

  let authorizedUser = data ? data.authorizedUser : null;

  console.log('authorizedUser', authorizedUser);

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.tabsContainer}>
        <Link to='/' component={AppBarTab}>
          Repositories
      </Link>
        <Link to='/signin' component={AppBarTab}>
          Sign in
      </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;