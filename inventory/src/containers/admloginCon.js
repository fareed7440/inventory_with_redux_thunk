import AdmLogin from '../components/login'
import adminLogin from '../store/action/admloginAct'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        inventoryApplication: state.inventoryApplication
    }
}


function mapDispatchToProps(dispatch) {
    return {
        AdminLogin: (loginData) => dispatch(adminLogin(loginData)),
      
    }
}


const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(AdmLogin)
export default LoginContainer;