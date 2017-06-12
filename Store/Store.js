import { createStore, applyMiddleware, compose } from 'redux'

import combineReducers from '../Reducers/index'

let middleware = []

export default () => {

  const enhancers = []

  if (__DEV__) {

    //reactotronEnhancer
    reactotronEnhancer = require('../Config/ReactotronConfig').reactotronEnhancer;
    enhancers.push(reactotronEnhancer)
  }

  // next bring in the middleware
  enhancers.push(applyMiddleware(...middleware))

  // create the store!
  const store = createStore(combineReducers, compose(...enhancers))

  return store
}
