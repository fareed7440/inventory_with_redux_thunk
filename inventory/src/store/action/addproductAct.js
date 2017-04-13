import Actions from './actionTypes'
import * as DB from '../../firebase/database'


function addproduct(productData){
  return  dispatch=>{
       dispatch(addproductRequest());
        return DB.database.ref('/products').push(productData).then((data)=>{
            dispatch(addproductRequestSuccess(data));
            alert('successfully added product')
        })
        .catch((error)=>{
            dispatch(addproductRequestFailed(error))
            alert('failed')
        })
    }
}


export function addproductRequest(){
    return{
        type: Actions.ADDPRODUCTREQUEST
    }
}


export function addproductRequestSuccess(data){
    return{
        type: Actions.ADDPRODUCTREQUESTSUCCESS,
        data
    }

}
export function addproductRequestFailed(){
    return{
        type: Actions.ADDPRODUCTREQUESTFAILED
    }
}

export default addproduct;