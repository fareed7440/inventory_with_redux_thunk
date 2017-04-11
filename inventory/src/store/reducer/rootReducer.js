import  LoginReducer from './loginReducer'
import {combineReducers} from 'redux'
import storeReducer from './storeReducer'
const mainReducer = combineReducers(
    {
        inventoryApplication : LoginReducer,
      storeReducer

    }
)

export default mainReducer;