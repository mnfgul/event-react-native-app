import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import Theme from '../../Theme'

class DrawerButton extends Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

//PropTypes Definitions
DrawerButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

//Styles Definitions
const styles = StyleSheet.create({
  text:{
    color: '#ddd',
    fontSize: 20,
  }
});


export default DrawerButton
