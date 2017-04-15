import Actions from '../action/actionTypes'
const initialState = {}
function purchaseReducer(state = initialState, action) {

  switch (action.type) {
    case Actions.ADDPURCHASEREQUESTSUCCESS: {
      var store = Object.assign({}, state, { purchase: action.data })
      state = store
      return state;

    }
    default:
      return state;
  }

}

export default purchaseReducer;