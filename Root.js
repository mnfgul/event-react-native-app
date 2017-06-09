import React, { Component } from 'react'
import { AsyncStorage, StyleSheet, View, StatusBar, Modal, Text, TouchableHighlight } from 'react-native'

import { Provider } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'

import NavigationRouter from './Navigation/NavigationRouter'

import AlertMessage from './Components/AlertMessage'
import {ApplicationStyles, Fonts, Metrics, Colors} from './Theme/'

// Config
import store from './Store/Store'
import './Config/ReactotronConfig'

//import Actions from './Actions/Creators'
//import DebugSettings from './Config/DebugSettings'


class RootScreen extends Component{

  componentDidMount(){
    this.isRegisteredUser()
  }

  async isRegisteredUser(){
    try {
      const isRegisteredUser = await AsyncStorage.getItem('isRegisteredUser')
      if (isRegisteredUser === null){
        NavigationActions.walkthrough()
      }else{
        NavigationActions.drawer()
      }
    } catch (error) {
      // TODO : Implement error logging
      alert('Kullanici bilgi alimi hatasi. Hata: '+error.message)
      console.log(error)
    }
  }

  // Render function
  render()
  {
    return(
      <Provider store={store()}>
        <View style={ApplicationStyles.screen.rootContainer}>
          <StatusBar barStyle='light-content' backgroundColor={Colors.purple}></StatusBar>
          <NavigationRouter />

        </View>
      </Provider>
    )
  }
}

export default RootScreen;
/*
          <Modal
            style ={styles.modal}
            animationType={"slide"}
            transparent={true}
            visible={true}
            onRequestClose={() => {alert("Modal has been closed.")}}
          >
            <AlertMessage title="Test"/>
          </Modal>

          const styles = StyleSheet.create({
            modal:{
              backgroundColor: 'rgba(0, 0, 0, 0.2)'
            }

          })
*/
