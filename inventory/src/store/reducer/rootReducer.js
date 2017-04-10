import  LoginReducer from './loginReducer'
import {combineReducers} from 'redux'

const mainReducer = combineReducers(
    {
        inventoryApplicationn : LoginReducer
    }
)

export default mainReducer;