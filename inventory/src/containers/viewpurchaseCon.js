import Actions from '../store/action/actionTypes'
import ViewPurchase from '../components/viewpurchase'
import { connect } from 'react-redux'
import viewPurchaseRequest from '../store/action/viewpurchaseAct'
//import {getStoreData} from '../store/action/getstoredata'
//import {getProductData} from '../store/action/getproductdata'
function mapStateToProps(state) {
    console.log("stateeeeeee", state)
    return {
        app: state.addproductReducer,
    }
}


function mapDispatchToProps(dispatch) {
    return {

        ViewPurchaseRequest: (purchasedata) => dispatch(viewPurchaseRequest(purchasedata)),

    }
}


const ViewPurchaseContainer = connect(mapStateToProps, mapDispatchToProps)(ViewPurchase);
export default ViewPurchaseContainer;