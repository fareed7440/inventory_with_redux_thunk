import Actions from '../action/actionTypes'
 const initialState = {}
 function storeReducer (state = initialState,action) {
   
    switch(action.type){
            case Actions.STOREREQUESTSUCCESS:{
                var store = Object.assign({},state,{inventoryApplication:action.data})
                  state = store
                return state;

    }
    default:
    return state;
    }

}

export default storeReducer;