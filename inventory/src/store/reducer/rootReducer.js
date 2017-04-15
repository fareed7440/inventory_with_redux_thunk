import LoginReducer from './loginReducer'
import { combineReducers } from 'redux'
import storeReducer from './storeReducer'
import addproductReducer from './addproductReducer'
import saleReducer from './saleReducer'
import  purchaseReduce from './purchaseReducer'
const mainReducer = combineReducers(
    {
        inventoryApplication: LoginReducer,
        storeReducer,
       addproductReducer,
       saleReducer,purchaseReduce


    }
)

export default mainReducer;