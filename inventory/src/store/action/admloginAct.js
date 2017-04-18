import Actions from './actionTypes'
import * as DB from '../../firebase/database'
import { browserHistory } from 'react-router';
function adminLogin(loginUser) {
    return dispatch => {
        dispatch(AdminLogin());
        DB.auth.signInWithEmailAndPassword(loginUser.email, loginUser.password)
            .then((data) => {
                return DB.database.ref('/user').once('value', snap => {
                    var all = snap.val()
                    dispatch(AdminLoginSuccess(all))
                    alert('login success')
                    browserHistory.push('/main')
                })
            })
            .catch((error) => {
                dispatch(AdminLoginfailed())
                alert('please enter correct email or password')
            })

    }
}


export function AdminLogin() {
    return {
        type: Actions.ADMINLOGIN
    }
}

export function AdminLoginSuccess(data) {
    return {
        type: Actions.ADMINLOGINSUCCESS,
        data
    }
}

export function AdminLoginfailed() {
    return {
        type: Actions.ADMINLOGINFAILED
    }
}

export default adminLogin;