export const Types = {
  load: 'EVENTS_LOAD',
  reset: 'EVENTS_RESET_LIST'
}

export const Actions = {
  load: (eventList) => ({ type: Types.load, eventList }),
  reset: () => ({ type: Types.reset }),
}

export const INITIAL_STATE = {
  eventList: [],
}

const load = (state, { eventList }) => {
  return {...state, eventList}
}
const reset = (state, action) => INITIAL_STATE

// actions -> reducers mapping
const reducerMap = {
  [Types.load]: load,
  [Types.reset]: reset,
}

// our reducer
export const reducer = (state = INITIAL_STATE, action) => {
  const handler = reducerMap[action.type]
  return typeof handler === 'function' ? handler(state, action) : state
}
