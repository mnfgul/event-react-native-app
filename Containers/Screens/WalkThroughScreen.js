import React, { Component } from 'react'
import { StyleSheet, View, StatusBar, Text } from 'react-native'

import {Actions as NavigationActions} from 'react-native-router-flux'

import Button from '../../Components/Button'

import {Fonts, Metrics, Colors} from '../../Theme/'

class WalkThroughScreen extends Component{

  // When component mount
  componentWillMount(){
  }

  handlePressRegisterBtn(){
    NavigationActions.register()
  }

  // Render function
  render()
  {
    return(
      <View style={styles.container}>
        <Text>WalkThrough Screen</Text>
        <Button text='Ok, Register Now!' onPress={this.handlePressRegisterBtn} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
})

export default WalkThroughScreen;
