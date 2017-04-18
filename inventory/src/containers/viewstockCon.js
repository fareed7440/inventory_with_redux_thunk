import Actions from '../store/action/actionTypes'
import ViewStock from '../components/viewstock'
import { connect } from 'react-redux'
import viewStockRequest from '../store/action/viewstockAct'
//import {getStoreData} from '../store/action/getstoredata'
//import {getProductData} from '../store/action/getproductdata'
function mapStateToProps(state) {
    console.log("stateeeeeee", state)
    return {
        stock: state.addproductReducer,
    }
}


function mapDispatchToProps(dispatch) {
    return {

        ViewStockRequest: (stockdata) => dispatch(viewStockRequest(stockdata)),

    }
}


const ViewStockContainer = connect(mapStateToProps, mapDispatchToProps)(ViewStock);
export default ViewStockContainer;