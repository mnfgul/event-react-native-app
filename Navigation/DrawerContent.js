import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'

import * as Animatable from 'react-native-animatable';

import DrawerButton from '../Components/Navigation/DrawerButton'

class DrawerContent extends Component {

  constructor(props){
    super(props)
    this.state = {
      animationType: ''
    }
  }

  componentWillReceiveProps(){
    if(this.props.isOpen){
      this.setState({animationType: 'bounceIn'})
    }else{
      this.setState({animationType: 'fadeOut'})
    }
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressPage1 = () => {
    this.toggleDrawer()
    NavigationActions.listEvents()
  }

  handlePressPage2 = () => {
    this.toggleDrawer()
    NavigationActions.page2()
  }

  handlePressPage3 = () => {
    this.toggleDrawer()
    NavigationActions.page3()
  }

  handlePressPage4 = () => {
    this.toggleDrawer()
    NavigationActions.page4()
  }

  handlePressPage5 = () => {
    this.toggleDrawer()
    NavigationActions.page5()
  }

  render () {
    return (
      <ScrollView style={styles.container}>

        <Image source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'}} style={styles.logo} />
        <Animatable.View  animation={this.state.animationType} style={styles.menuItem}>
          <DrawerButton text='Page 1' onPress={this.handlePressPage1} />
        </Animatable.View>

        <Animatable.View   animation={this.state.animationType} style={styles.menuItem}>
          <DrawerButton text='Page 1' onPress={this.handlePressPage1} />
        </Animatable.View>

        <Animatable.View  animation={this.state.animationType} style={styles.menuItem}>
          <DrawerButton text='Page 1' onPress={this.handlePressPage1} />
        </Animatable.View>

        <Animatable.View   animation={this.state.animationType} style={styles.menuItem}>
          <DrawerButton text='Page 1' onPress={this.handlePressPage1} />
        </Animatable.View>

        <DrawerButton text='Page 2' onPress={this.handlePressPage2} />
        <DrawerButton text='Page 3' onPress={this.handlePressPage3} />
        <DrawerButton text='Page 4' onPress={this.handlePressPage4} />
        <DrawerButton text='Page 5' onPress={this.handlePressPage5} />

      </ScrollView>
    )
  }

}

//PropTypes Definitions
DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

DrawerContent.propTypes = {
  isOpen: React.PropTypes.bool,
}

//StyleSheet Definitions
const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },

  logo: {
    alignSelf: 'center'
  },

  menuItem:{
    margin: 10,
    padding: 10,
  }

})

//Export Module Default
export default DrawerContent
