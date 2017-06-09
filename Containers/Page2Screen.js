import React, { Component } from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'

import { connect } from 'react-redux'

import Button from '../Components/Button'
import {Actions} from '../Reducers/UserRedux'

import {Colors} from '../Theme/'

class Page2Screen extends Component {

  constructor(props, context){
    super(props, context)
    //console.tron.log(this.context.store.getState())
    //console.tron.log()
  }

  pressHandler = () => {
    //console.log(Actions);
    this.props.dispatch(Actions.register('Menaf'))
    
    //this.props.name = 'My Name'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>User Name: {this.props.name}</Text>
        <Button text="Click Me!" onPress={this.pressHandler}/>
      </View>
    );
  }
}

Page2Screen.contextTypes = {
  store: React.PropTypes.object.isRequired
};

Page2Screen.propTypes = {
  dispatch: React.PropTypes.func,
  test: React.PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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

// StyleSheet Definitions
//{{drawer: { shadowColor: '#fff', shadowOpacity: 0.8, shadowRadius: 1},main: {paddingLeft: 0}}}
const drawerStyle = {
  drawer: {
    backgroundColor: Colors.background
  },
  main: {
    backgroundColor: Colors.ember
  }
}

// Redux observers
const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    email: state.user.email,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    test: userActions.register
  }
}

// Export Module Default
export default connect(mapStateToProps)(Page2Screen)
