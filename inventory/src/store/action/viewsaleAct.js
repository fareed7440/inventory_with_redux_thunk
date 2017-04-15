import Actions from './actionTypes'
import * as DB from '../../firebase/database'
function viewSaleRequest(){
    return dispatch=>{
        dispatch(ViewSaleRequest());
         return  DB.database.ref('/sale').once('value' ,snap=>{
            var salesData = [];
            snap.forEach(ChildSnapshot=>{
                var data = ChildSnapshot.val();
                salesData.push(data); 
            })
            // console.log("daaaaaaaaaaaaaaa" , arr)
            dispatch(ViewSaleRequestSuccess(salesData))
        })
    } 
    }



export function ViewSaleRequest(){
    return{
        type: Actions.VIEWSALE
    }
}


export function ViewSaleRequestSuccess(data){
    return{
        type:Actions.VIEWSALESUCCESS,
        data
    }
}


export function ViewSaleRequestFailed(){
    return{
        type:Actions.VIEWSALEFAILED
    }
}

export default viewSaleRequest;