import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import propTypes from 'prop-types';

const MyButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('press')}
      onPressIn={() => console.log('in')}
      onPressOut={() => console.log('out')}
      onLongPress={() => console.log('long')}
      delayLongPress={3000}
    >
      <View style={{ backgroundColor: 'gray', marign: 10, padding: 10 }}>
        <Text style={{ fontSize: 20, color: 'white' }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default MyButton;
