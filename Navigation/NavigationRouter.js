import React, { Component } from 'react'
import {StyleSheet} from 'react-native'

import { Actions, ActionConst, Scene, Router, Reducer } from 'react-native-router-flux'

import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

import {Colors} from '../Theme/'

// guest screens
import RegisterScreen from '../Containers/Screens/RegisterScreen'
import LoginScreen from '../Containers/Screens/LoginScreen'
import WalkThroughScreen from '../Containers/Screens/WalkThroughScreen'

// registered user screens
import MainScreen from '../Containers/Screens/MainScreen'
import ListEventsScreen from '../Containers/Screens/ListEventsScreen'
import Page2Screen from '../Containers/Page2Screen'
import Page3Screen from '../Containers/Page3Screen'
import Page4Screen from '../Containers/Page4Screen'
import Page5Screen from '../Containers/Page5Screen'

class NavigationRouter extends Component {

  render () {
    return (
      <Router createReducer={reducerCreate} navigationBarStyle={styles.navBar} titleStyle={styles.darkTitle}>

        <Scene initial key='main' component={MainScreen} hideNavBar={true}/>
        <Scene key='register' component={RegisterScreen} title='Register Page' hideNavBar={true}/>
        <Scene key='login' component={LoginScreen} title='Login Page'/>
        <Scene key='walkthrough' component={WalkThroughScreen} title='WalkThrough Page' type={ActionConst.REPLACE}/>

        <Scene key='drawer' component={NavigationDrawer} open={false} type = {ActionConst.REPLACE}>
          <Scene key='drawerChildrenWrapper' titleStyle={styles.lightTitle}
                  leftButtonIconStyle={styles.leftButton}
                  rightButtonTextStyle={styles.rightButton}>
            <Scene key='listEvents' component={ListEventsScreen} title='List Events'
                  renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='page2' component={Page2Screen} title='Page 2' />
            <Scene key='page3' component={Page3Screen} title='Page 3'
                  rightTitle='Example' onRight={() => Actions.test1()} />
            <Scene key='page4' component={Page4Screen} hideNavBar={false} title='Page 4' />
            <Scene key='page5' component={Page5Screen} title='Page 5' />

            <Scene key='test' direction="vertical">
              <Scene key='test2' component={Page5Screen} title='Test 2'/>
            </Scene>
            <Scene key='test1' component={Page5Screen} title='Test 1'/>

          </Scene>
        </Scene>


      </Router>
    )
  };

}

const reducerCreate = (params) => {
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        return defaultReducer(state, action);
    }
};


const styles = StyleSheet.create({
  navBar: {
    backgroundColor: Colors.background,
    borderBottomWidth: 0,
    borderBottomColor: 'blue',
  },
  lightTitle: {
    color: 'blue',
  },
  darkTitle: {
    color: 'white',
    fontFamily: 'AvenirNextCondensed-Regular',

  },
  leftButton: {
    tintColor: Colors.snow,
  },
  rightButton: {
    color: Colors.snow
  }
})

export default NavigationRouter;
