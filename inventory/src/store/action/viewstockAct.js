import Actions from './actionTypes'
import * as DB from '../../firebase/database'
function viewStockRequest(){
    return dispatch=>{
        dispatch(ViewStockRequest());
         return  DB.database.ref('/products').once('value' ,snap=>{
            var stockData = [];
            snap.forEach(ChildSnapshot=>{
                var data = ChildSnapshot.val();
                stockData.push(data); 
            })
             console.log("daaaaaaaaaaaaaaa" , stockData)
            dispatch(ViewStockRequestSuccess(stockData))
        })
    } 
    }



export function ViewStockRequest(){
    return{
        type: Actions.VIEWSTOCK
    }
}


export function ViewStockRequestSuccess(data){
    return{
        type:Actions.VIEWSTOCKSUCCESS,
        data
    }
}


export function ViewStockRequestFailed(){
    return{
        type:Actions.VIEWSTOCKFAILED
    }
}

export default viewStockRequest;