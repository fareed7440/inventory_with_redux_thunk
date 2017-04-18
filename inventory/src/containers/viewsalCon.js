import Actions from '../store/action/actionTypes'
import ViewSale from '../components/viewsale'
import { connect } from 'react-redux'
import viewSaleRequest from '../store/action/viewsaleAct'
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

        ViewSaleRequest: (saledata) => dispatch(viewSaleRequest(saledata)),

    }
}


const ViewSaleContainer = connect(mapStateToProps, mapDispatchToProps)(ViewSale);
export default ViewSaleContainer;