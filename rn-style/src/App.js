import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: '#red';
  align-items: 'center';
  justify-content: 'center';
`;

const cssText = css`
  font-size: 20px;
  font-weight: 600;
`;

const StyleText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: blue;
`;

const ErrorText = styled.Text`
  $(cssText)
  color: :red;
`;

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <StyleText>Styled Components</StyleText>
    </Container>
  );
}
