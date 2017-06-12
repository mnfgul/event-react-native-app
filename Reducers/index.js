import { combineReducers } from 'redux'
import {reducer as UserReducer} from './UserRedux'
import {reducer as EventReducer} from './EventRedux'

// glue all the reducers together into 1 root reducer
export default combineReducers({
  user: UserReducer,
  event: EventReducer
})

export const persistentStoreBlacklist = ['login']
