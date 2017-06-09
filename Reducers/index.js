import { combineReducers } from 'redux'
import {reducer as UserReducer} from './UserRedux'
import {reducer as EventReducer} from './EventRedux'

// glue all the reducers together into 1 root reducer
export default combineReducers({
  user: UserReducer,
  event: EventReducer
})

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = ['login']
// OR put reducer keys that you DO want stored to persistence here (overrides blacklist)
// export const persistentStoreWhitelist = []