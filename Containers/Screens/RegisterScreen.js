import React, { Component } from 'react'
import { StyleSheet, View, StatusBar, Text } from 'react-native'

import {Actions as NavigationActions} from 'react-native-router-flux'

import Button from '../../Components/Button'

import {Fonts, Metrics, Colors} from '../../Theme/'

class RegisterScreen extends Component{

  // When component mount
  componentWillMount(){
  }

  handlePressRegisterUserBtn(){
    alert('Register User')
  }

  handlePressLoginBtn(){
    NavigationActions.login()
  }

  // Render function
  render()
  {
    return(
      <View style={styles.container}>
        <Text>Register Screen</Text>
        <Button text='Register User' onPress={this.handlePressRegisterUserBtn}/>
        <Button text='User, Login' onPress={this.handlePressLoginBtn}/>
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

export default RegisterScreen;
