import React, { Component, PropTypes } from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import { connect } from 'react-redux'

import {Actions as EventActions} from '../../Reducers/EventRedux'
import EventService from '../../Services/EventService'

import AlertMessage from '../../Components/AlertMessage'

class ListEventsScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      events: []
    }
  }

  componentDidMount(){
    EventService.GetEvents().then((response) =>{
      this.props.dispatch(EventActions.load(response.data))
    }).done(() => {
      this.setState({isLoading: false})
    })
  }

  render(){
    if(this.state.isLoading){
      return this.render1()
    }else{
      return this.render3()
    }
  }

  render1(){
    return(
      <View style={styles.container}>
        <Text>Loading Events...</Text>
        <Text>State: {this.state.isLoading}</Text>
      </View>
    )
  }
  render2() {
    return (
      <View style={styles.container}>
        <Text>Loaded Events</Text>
        <Text>Events: {this.props.eventList.toString()}</Text>
      </View>
    )
  }
  render3() {
    return (
      <View style={styles.container}>
        <Text>Alert Example</Text>
        <AlertMessage title="Test"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311847', //purple
  },
});

ListEventsScreen.propTypes = {
  dispatch: React.PropTypes.func,
}

// Redux observers
const mapStateToProps = (state) => {
  return {
    eventList: state.event.eventList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

// Export Module Default
//export default ListEventsScreen
export default connect(mapStateToProps)(ListEventsScreen)
