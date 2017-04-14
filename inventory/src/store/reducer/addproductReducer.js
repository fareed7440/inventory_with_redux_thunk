import Actions from '../action/actionTypes'
const initialState = {}
function addproductReducer(state = initialState, action) {

  switch (action.type) {
    case Actions.ADDPRODUCTREQUESTSUCCESS: {
      var loginState = Object.assign({}, state, { addproduct: action.data })
      state = loginState
      return state;
    }
    case Actions.storeDataSuccess: {
      var state01 = Object.assign({}, state, { store: action.data })
      state = state01
      return state;
    }

 case Actions.ProductDataSuccess: {
      var state02 = Object.assign({}, state, { product: action.data })
      state = state02
      return state;
    }


    default:
      return state;
  }

}

export default addproductReducer;