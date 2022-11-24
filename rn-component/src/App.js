import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import MyButton from './MyButton';

export default function App() {
  const [addition, setAddition] = useState(0);
  const [multiple, setMultiple] = useState(1);

  return (
    <View style={styles.container}>
      <TextInput
        // onChange={event => console.log(event.nativeEvent.text)}
        onChangeText={text => console.log(text)}
        style={{ borderWidth: 1, padding: 10, fontSize: 10 }}
      />

      {/* <Text style={{ fontSize: 20 }}>{addition}</Text>
      <Text style={{ fontSize: 20 }}>{multiple}</Text>
      <MyButton title="addition" onPress={() => setAddition(addition + 2)} />
      <MyButton title="multiple" onPress={() => setMultiple(multiple * 2)} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
