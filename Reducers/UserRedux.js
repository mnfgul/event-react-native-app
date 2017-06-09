export const Types = {
  Register: 'USER_REGISTER',
  Login: 'USER_LOGIN',
  Logout: 'USER_LOGOUT'
}

export const Actions = {
  register: (name) => ({ type: Types.Register, name }),
  login: (params) => ({ type: Types.Login, params }),
  logout: () => ({ type: Types.Logout })
}

export const INITIAL_STATE = {
  name: 'test name',
  email: 'test@test.com'
}

const register = (state, { name }) => {
  console.log(name)
  return {...state, name}
 }
const login = (state, { param1 }) => ({ ...state, param1 })
const logout = (state, action) => INITIAL_STATE

// actions -> reducers mapping
const reducerMap = {
  [Types.Register]: register,
  [Types.Login]: logout,
  [Types.Logout]: login
}

// our reducer
export const reducer = (state = INITIAL_STATE, action) => {
  const handler = reducerMap[action.type]
  return typeof handler === 'function' ? handler(state, action) : state
}
