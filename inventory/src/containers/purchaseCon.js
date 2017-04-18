import Actions from '../store/action/actionTypes'
import Purchase from '../components/addpurchase'
import { connect } from 'react-redux'
import purchaseAction from '../store/action/purchaseAct'
import { getStoreData } from '../store/action/getstoredata'
import { getProductData } from '../store/action/getproductdata'
function mapStateToProps(state) {
    console.log("stateeeeeee", state)
    return {
        app: state.addproductReducer,
    }
}


function mapDispatchToProps(dispatch) {
    return {

        addPurchaseRequest: (purchasedata) => dispatch(purchaseAction(purchasedata)),
        storedata: () => dispatch(getStoreData()),
        productdata: () => dispatch(getProductData())
    }
}


const PurchaseContainer = connect(mapStateToProps, mapDispatchToProps)(Purchase);
export default PurchaseContainer;