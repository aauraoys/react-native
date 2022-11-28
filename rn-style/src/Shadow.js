import React from 'react';
import { StyleSheet, View } from 'react-native';

const Shadow = () => {
  return <View style={styles.shadow}></View>;
};

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: '#ffffff',
    width: 200,
    height: 200,
    shadowColor: '#000000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});

export default Shadow;
