import Actions from '../store/action/actionTypes'
import Sale  from '../components/sale'
// import addproduct from '../store/action/addproductAct'
import {connect } from 'react-redux'
import  saleAction from '../store/action/saleAct'
// import storeAction from '../store/action/storeAct'
import {getStoreData} from '../store/action/getstoredata'
import {getProductData} from '../store/action/getproductdata'
function mapStateToProps(state){
    return{
      app: state.addproductReducer,
    }
}


function mapDispatchToProps(dispatch){
    return{
        
       addSaleRequest : (productdata) => dispatch(saleAction(productdata)),
        storedata : () => dispatch(getStoreData()),
        productdata : ()=> dispatch(getProductData())
    }
}


     const SaleContainer = connect(mapStateToProps,mapDispatchToProps)(Sale);
           export default SaleContainer ;