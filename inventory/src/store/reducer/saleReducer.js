import Actions from '../action/actionTypes'
const initialState = {}
function saleReducer(state = initialState, action) {

  switch (action.type) {
    case Actions.ADDSALEREQUESTSUCCESS: {
      var store = Object.assign({}, state, { sale: action.data })
      state = store
      return state;

    }
    default:
      return state;
  }

}

export default saleReducer;