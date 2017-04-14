import Actions from '../store/action/actionTypes'
import Addproduct  from '../components/addproduct'
 import addproduct from '../store/action/addproductAct'
import {connect } from 'react-redux'
// import storeAction from '../store/action/storeAct'
import {getStoreData} from '../store/action/getstoredata'

function mapStateToProps(state){
    return{
      app: state.addproductReducer,
     
    }
}


function mapDispatchToProps(dispatch){
    return{
        
        addPropductRequest : (productdata) => dispatch(addproduct(productdata)),
        storedata : () => dispatch(getStoreData()),

    }
}


const AddproductContainer = connect(mapStateToProps,mapDispatchToProps)(Addproduct)
export default AddproductContainer;