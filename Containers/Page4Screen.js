import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

class Page4Screen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Page 1 Secreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Page4Screen;
