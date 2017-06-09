import React, { Component, PropTypes } from 'react'
import { ActivityIndicator, StyleSheet, View, StatusBar, Text } from 'react-native'

import { Actions as NavigationActions } from 'react-native-router-flux'

import {Fonts, Metrics, Colors} from '../../Theme/'

class MainScreen extends Component{

  componentDidMount()
  {

  }
  // Render function
  render()
  {
    return(
      <View style={styles.container}>
        <ActivityIndicator size='large'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background
  },
})


export default MainScreen;
