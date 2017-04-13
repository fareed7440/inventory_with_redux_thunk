import LoginReducer from './loginReducer'
import { combineReducers } from 'redux'
import storeReducer from './storeReducer'
import addproductReducer from './addproductReducer'
const mainReducer = combineReducers(
    {
        inventoryApplication: LoginReducer,
        storeReducer,
       addproductReducer

    }
)

export default mainReducer;