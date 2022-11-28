import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: '#e3e3e3';
  align-items: 'center';
  justify-content: 'center';
`;

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
    </Container>
  );
}
