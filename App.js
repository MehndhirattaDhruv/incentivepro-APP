import React from 'react';
import { Main } from './src/containers';
import { Container, Header, Body } from 'native-base';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { Constants } from 'expo';
import  store  from './src/store'
import Routes from './src/Routes';

export default class App extends React.Component {
  render() {

    return (
      <Container>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Container>
    )
  }
}

