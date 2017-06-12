import React, { PropTypes, Component } from 'react'
import {StyleSheet} from 'react-native'

import { connect } from 'react-redux'
import Drawer from 'react-native-drawer'
import { DefaultRenderer, Actions } from 'react-native-router-flux'

import DrawerContent from './DrawerContent'
import {Colors} from '../Theme/'

class NavigationDrawer extends Component {

  render()
  {
    const state = this.props.navigationState;
    const children = state.children;

    return (
      <Drawer
        ref = 'navigation'
        type = 'displace'
        open = {state.open}
        onOpen = {() => {
          Actions.refresh({key: state.key, open: true})
        }}
        onClose = {() => {
          Actions.refresh({key: state.key, open: false})
        }}
        content = {<DrawerContent isOpen={state.open}/>}
        styles = {drawerStyle}
        tapToClose
        openDrawerOffset = {0.2}
        panCloseMask = {0.2}
        negotiatePan
        tweenHandler = {(ratio) => ({
          main: { opacity: Math.max(0.54, 1 - ratio) }
        })}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }

}

// PropTypes Definitions
NavigationDrawer.propTypes = {
  navigationState: PropTypes.object
}

// Redux observers
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


// StyleSheet Definitions
const drawerStyle = {
  drawer: {
    backgroundColor: Colors.orange
  },
  main: {
    backgroundColor: Colors.background
  }
}

// Export Module Default
export default NavigationDrawer;
