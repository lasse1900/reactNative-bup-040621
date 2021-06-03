// import React from 'react';
// import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
// import Text from './Text';
// import theme from '../theme';

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   tab: {
//     color: theme.colors.contrastTextColor,
//     fontSize: 24,
//     padding: 15
//   },
// });

// const AppBarTab = (props) => {
//   return (
//     <TouchableWithoutFeedback style={styles.container} {...props}>
//       <Text style={styles.tab}>
//         {props.children}
//       </Text>
//     </TouchableWithoutFeedback>
//   );
// };

// export default AppBarTab;

import React from 'react';
import { Link } from "react-router-native";
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    marginRight: 10,
  }
});

const AppBarTab = ({ link, label, onPress }) => {
  return (
    <Link to={link} component={TouchableWithoutFeedback} onPress={onPress} >
      <Text style={styles.text}>{label}</Text>
    </Link>
  );
};

export default AppBarTab;