import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    backgroundColor: theme.colors.backgroundColor,
  },
  flexContainerTop: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    marginLeft: 4,
  },
  flexContainerLow: {
    display: 'flex',
    flexGrow: 0,
    flexDirection: 'row',
    marginLeft: 4,
    justifyContent: 'space-evenly'
  },
  flexContainerImage: {
    flexGrow: 0,
    flexDirection: 'column',
  },
  languageText: {
    color: 'blue',
    fontWeight: theme.fontWeights.bold,
  },
  image: {
    flexGrow: 0,
    padding: 5,
    borderRadius: 5,
    width: 40,
    height: 40,
    marginRight: 20,
  },
  nameText: {
    flexGrow: 0,
    display: 'flex',
    fontWeight: theme.fontWeights.bold,
  },
  statisticText: {
    flexGrow: 0,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center'
  },
  detailsStyle: {
    justifyContent: 'center',
  }
});

const RepositoryItem = ({ list }) => {
  // console.log(list);
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexContainerTop}>
        <Image style={styles.image} source={{ uri: list.item.ownerAvatarUrl }} />
        <View style={styles.flexContainerImage}>
          <Text style={styles.nameText}>{list.item.fullName}</Text>
          <Text>{list.item.description}</Text>
          <Text style={styles.languageText}>{list.item.language}</Text>
        </View>
      </View>
      <View style={styles.flexContainerLow}>
        <View style={styles.detailsStyle}>
          <Text style={styles.statisticText}>
            {(list.item.stargazersCount / 1000).toFixed(1)}{'k'}
          </Text>
          <Text>{'Stars'}</Text>
        </View>
        <View style={styles.detailsStyle}>
          <Text style={styles.statisticText}>
            {(list.item.forksCount / 1000).toFixed(1)}{'k'}
          </Text>
          <Text>{'Forks'}</Text>
        </View>
        <View style={styles.detailsStyle}>
          <Text style={styles.statisticText}>{list.item.reviewCount}</Text>
          <Text>{'Reviews'}</Text>
        </View>
        <View style={styles.detailsStyle}>
          <Text style={styles.statisticText}>{list.item.ratingAverage}</Text>
          <Text>{'Rating'}</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;