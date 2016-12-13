import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import NavigationRootContainer from '../containers/navRootContainer'


export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationRootContainer /> 
      </Provider>
    )
  }

}
