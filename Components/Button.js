import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

class Button extends Component {

  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string.isRequired
  }

  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.button}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  button:{
    margin: 10,
    padding: 10,
    backgroundColor: 'steelblue',
    color: 'white'
  },
})

export default Button
