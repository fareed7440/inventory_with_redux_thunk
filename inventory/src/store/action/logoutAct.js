import Actions from './actionTypes'
import * as DB from '../../firebase/database'
import {browserHistory} from 'react-router'

export function logoutRequest(data) {
    return dispatch => {
        dispatch(LogOutRequest());
        return DB.auth.signOut()
            .then((data) => {
                dispatch(logOutRequestSuccess());
                browserHistory.push("/")
            })
           
    }
}
function LogOutRequest() {
    return {
        type: Actions.LOGOUT
    }
}

function logOutRequestSuccess(data) {
    return {
        type: Actions.LOGOUTSUCCESS,
        data
    }
}