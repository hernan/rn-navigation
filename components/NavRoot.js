import React, { Component } from 'react'
import {
  BackAndroid,
  NavigationExperimental,
  ToolbarAndroid
} from 'react-native'

import About from './About'
import DayEntry from './DayEntry'
import Home from './Home'

import { toolbarStyle } from './styles'


const {
  CardStack: NavigationCardStack
} = NavigationExperimental

class NavRoot extends Component {
  constructor (...args) {
    super(...args)
    this._renderScene = this._renderScene.bind(this)
    this._handleBackAction = this._handleBackAction.bind(this)
    this._handleNavigate = this._handleNavigate.bind(this)
    this._renderHeader = this._renderHeader.bind(this)
    this._onToolbarAction = this._onToolbarAction.bind(this)
  }

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }

  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }

  _renderScene (props) {
    const { route } = props.scene
    if (route.key === 'home') {
     return <Home _handleNavigate={this._handleNavigate.bind(this)} />
    }
    if (route.key === 'about') {
     return <About _goBack={this._handleBackAction.bind(this)} />
    }
    if (route.key === 'dayEntry') {
      return <DayEntry />
    }
  }

  _renderHeader (props) {
    const { route } = props.scene
    let actions = []
    //console.log("Header props", props)
    
    switch(route.key) {
      case 'home':
        return <ToolbarAndroid 
          style={toolbarStyle} 
          title={route.title || 'No Title'} 
          actions={[{title: 'Add', show:'always'}]}
          onActionSelected={this._onToolbarAction}
          />

      default:
        return <ToolbarAndroid 
          style={toolbarStyle} 
          title={route.title || 'No Title'} 
          navIcon={require('../assets/nav_back_icon.png')}
          onIconClicked={() => this._handleNavigate({type: 'pop'})}
          />

      // default: 
      //   return <ToolbarAndroid style={toolbarStyle} title={route.title || 'No Title'} /> 
    }

  }

  _onToolbarAction (position) {
    if (position === 0) {
      this._handleNavigate({type: 'push', route: {key: 'dayEntry', title: 'Add'}}) 
    }
  }

  _handleBackAction () {
    if (this.props.navigation.index === 0) {
      return false
    }
    this.props.popRoute()
    return true
  }

  _handleNavigate (action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route)
        return true
      case 'back':
      case 'pop':
        return this._handleBackAction()
      default:
        return false
    }
  }

  render () {
    return (
      <NavigationCardStack
        direction='horizontal'
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        enableGestures={false} />
      )
   }
}

export default NavRoot
