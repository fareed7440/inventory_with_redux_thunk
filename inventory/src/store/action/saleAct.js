import Actions from './actionTypes'
import * as DB from '../../firebase/database'

export function saleAction(storeData){
     console.log('222222222222',storeData)
    return dispatch =>{
       
        dispatch(SaleAction());
        return DB.database.ref('/sale').push(storeData,function(error,data){
            
           return DB.database.ref('/products/').once('value').then(function(snapshot){
               snapshot.forEach(function(quantitySnapshot){
                   var qq = quantitySnapshot.val(); 
                console.log('asdhasjkhdasjk',qq.quantity)
                 if(parseInt(qq.quantity) < storeData.quantity || parseInt(qq.price) < storeData . price){
                    alert('lessssssssssssssss')
                  

                }
                else{
                    let total  = {

                          quantity: (parseInt(qq.quantity) - parseInt(storeData.quantity)),
                    price: parseInt(qq.price) - storeData.price,
                    store: storeData.store

                }
                let userRef = DB.database.ref('/products').update(total)

                }
            })
            
        },
                   
               )
             //console.log('aaaaaaaaaaasssss',snapshot.val().quantity)
               
           
          dispatch( SaleActionSuccess())
            alert("sucessfully add data")
        })
        
        .catch((error)=>{
            dispatch((SaleActionFailed(error)))
            alert('failed')
        })
        

    }
}

export function SaleAction(){
    return{
        type:Actions.ADDSALEREQUEST
    }
}

export function SaleActionSuccess(data){
    return{
        type: Actions.ADDSALEREQUESTSUCCESS,
        data
    }
}
export function SaleActionFailed(){
    return{
        type: Actions.ADDSALEREQUESTFAILED
    }
}
export default saleAction;
