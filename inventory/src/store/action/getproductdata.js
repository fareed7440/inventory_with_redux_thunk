import Actions from './actionTypes'
import * as DB from '../../firebase/database'

export function getProductData(data){
   return dispatch =>{
        // dispatch(storeData());
      return  DB.database.ref('/products').once('value' ,snap=>{
            // var data = snap.val();
            var arr = [];
            snap.forEach(ChildSnapshot=>{
                var data = ChildSnapshot.val();
                arr.push(data); 
            })
            // console.log("daaaaaaaaaaaaaaa" , arr)
            dispatch(productDataSuccess(arr))
        })
    }
}
function productData(){
    return {
        type : Actions.ProductData
    }
}

function productDataSuccess(data){
    return {
        type : Actions.ProductDataSuccess,
        data
    }
}