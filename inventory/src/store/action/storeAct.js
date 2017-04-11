import Actions from './actionTypes'
import * as DB from '../../firebase/database'

export function storeAction(storeData){
     console.log('222222222222',storeData)
    return dispatch =>{
       
        dispatch(StoreAction());
        return DB.database.ref('/stores').push(storeData).then((data)=>{
              alert("sucessfully create Store")
          dispatch( StoreActionSuccess(data))
          
        })
        .catch((error)=>{
            dispatch((StoreActionFailed(error)))
            alert('failed')
        })
        

    }
}

export function StoreAction(){
    return{
        type:Actions.STOREREQUEST
    }
}

export function StoreActionSuccess(data){
    return{
        type: Actions.STOREREQUESTSUCCESS,
        data
    }
}
export function StoreActionFailed(){
    return{
        type: Actions.STOREREQUESTFAILED
    }
}
export default storeAction;
