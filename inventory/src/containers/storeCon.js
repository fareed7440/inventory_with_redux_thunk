import storeAction from '../store/action/storeAct'
import Store from '../components/store'
import { connect } from 'react-redux'


function mapStateToProps(state){
    return{
       inventoryApplication: state.inventoryApplication
    }
}

function mapDispatchToProps(dispatch){
    return{
       StoreAction : (storesData) => dispatch(storeAction(storesData))
    }
}

const StoreContainer = connect(mapStateToProps,mapDispatchToProps)(Store);
export default StoreContainer;