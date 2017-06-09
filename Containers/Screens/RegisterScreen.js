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


/*
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

class Root extends Component {
  render() {
    return (

     <View>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

export default Root;
*/
