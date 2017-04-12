import Actions from '../action/actionTypes'
 const initialState = {}
 function addproductReducer (state = initialState,action) {
   
    switch(action.type){
            case Actions.ADMINLOGINSUCCESS:{
                var loginState = Object.assign({},state,{addproduct:action.data})
                  state = loginState
                return state;
                

    }
    default:
    return state;
    }

}

export default addproductReducer ;