import Actions from './actionTypes'
import * as DB from '../../firebase/database'
import { browserHistory } from 'react-router';
export function purchaseAction(storeData) {
    console.log('222222222222', storeData)
    return dispatch => {

        dispatch(PurchaseAction());


        return DB.database.ref(`/products/` + storeData.productID).once('value', (snapshot) => {

            console.log('vallllllllllllllllllllll', snapshot.val())
            console.log('priceeeeeeeeeeeeee',storeData.price)
             console.log('productsssssssssssssssssss',storeData.product)
            if(snapshot.val().price < storeData.price ||snapshot.val().product !== storeData.product ){
                alert('you have lesss price in your stock or no have selected products')
            }
            else {
            let total = {

                quantity: (parseInt(snapshot.val().quantity) + parseInt(storeData.quantity)),
                price: parseInt(snapshot.val().price) - storeData.price,
                store: storeData.store

            }
            let userRef = DB.database.ref(`/products/` + storeData.productID).update(total)

            let saleObject = {
                store: storeData.store,
                product: storeData.product,
                quantity: storeData.quantity,
                price: storeData.price,
                date: storeData.date
            }
            console.log('hhjjjjjjjjjjjjjjjjjjjjjjjjj', saleObject)

            return DB.database.ref('/purchase').push(saleObject).then(() => {
                
                dispatch(PurchaseActionSuccess())
                alert("sucessfully add data")
browserHistory.push('/main')
            })
                .catch((error) => {
                    dispatch((PurchaseActionFailed(error)))
                    alert('failed')
                })

            
        }
        }






        )



    }








}


export function PurchaseAction() {
    return {
        type: Actions.ADDPURCHASEREQUEST
    }
}

export function PurchaseActionSuccess(data) {
    return {
        type: Actions.ADDPURCHASEREQUESTSUCCESS,
        data
    }
}
export function PurchaseActionFailed() {
    return {
        type: Actions.ADDPURCHASEREQUESTFAILED
    }
}
export default purchaseAction;
