import Actions from '../action/actionTypes'
const initialState = {}
function LoginReducer(state = initialState, action) {

  switch (action.type) {
    case Actions.ADMINLOGINSUCCESS: {
      var loginState = Object.assign({}, state, { login: action.data })
      state = loginState
      return state;


    }
    default:
      return state;
  }

}

export default LoginReducer;