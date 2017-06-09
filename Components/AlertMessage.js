import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'

import { Colors, Metrics, Fonts } from '../Theme/'


export default class AlertMessage extends React.Component {

  render () {
    let messageComponent = null

    if (this.props.show) {
      const { title } = this.props
      return (
        <Animatable.View
          style={[styles.container, this.props.style]}
          delay={800}
          animation='bounceIn'
        >
          <View style={styles.contentContainer}>
            <Icon
              name={this.props.icon || 'ios-alert'}
              size={Metrics.icons.large}
              style={styles.icon}
            />
            <Text allowFontScaling={true} style={styles.message}>{title && title.toUpperCase()}</Text>
          </View>
        </Animatable.View>
      )
    }

    return messageComponent
  }
}

AlertMessage.propTypes = {
  style: React.PropTypes.object,
  title: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string,
  show: React.PropTypes.bool
}

AlertMessage.defaultProps = {
  show: true
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    marginVertical: Metrics.section
  },
  contentContainer: {
    alignSelf: 'center',
    alignItems: 'center'
  },
  message: {
    marginTop: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
    textAlign: 'center',
    fontFamily: Fonts.base,
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    color: Colors.steel
  },
  icon: {
    color: Colors.steel
  }
})
