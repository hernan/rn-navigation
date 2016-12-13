import { combineReducers } from 'redux'
import DataReducer from './reducer_data'
import NavReducer from './reducer_navigation'

export default combineReducers({
  data: DataReducer,
  navigation: NavReducer
})
