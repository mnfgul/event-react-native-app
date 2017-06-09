import React, { Component } from 'react'
import { StyleSheet, View, StatusBar, Text } from 'react-native'

import {Actions as NavigationActions} from 'react-native-router-flux'
import { LoginButton, AccessToken } from 'react-native-fbsdk'

import Button from '../../Components/Button'

import {Fonts, Metrics, Colors} from '../../Theme/'

class LoginScreen extends Component{

  // When component mount
  componentWillMount(){
  }

  // Render function
  render()
  {
    return(
      <View style={styles.container}>
        <Text>Login Screen</Text>

        <LoginButton
          readPermissions = {["email","user_birthday"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data)
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}
        />

        <Button text='Ok, Success' onPress={()=>{NavigationActions.drawer()}}/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#311847', //purple
  },
})

export default LoginScreen;
