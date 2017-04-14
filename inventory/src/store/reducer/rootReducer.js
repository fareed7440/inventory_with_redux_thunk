import LoginReducer from './loginReducer'
import { combineReducers } from 'redux'
import storeReducer from './storeReducer'
import addproductReducer from './addproductReducer'
import saleReducer from './saleReducer'
const mainReducer = combineReducers(
    {
        inventoryApplication: LoginReducer,
        storeReducer,
       addproductReducer,
       saleReducer


    }
)

export default mainReducer;