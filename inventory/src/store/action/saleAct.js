import Actions from './actionTypes'
import * as DB from '../../firebase/database'
import { browserHistory } from 'react-router';
export function saleAction(storeData) {
    console.log('222222222222', storeData)
    return dispatch => {

        dispatch(SaleAction());


        return DB.database.ref(`/products/` + storeData.productID).once('value', (snapshot) => {

            console.log('vallllllllllllllllllllll', snapshot.val())
            if (parseInt(snapshot.val().quantity) < storeData.quantity) {
                alert('your Quantity is less than')


            }
            else {
                let total = {

                    quantity: (parseInt(snapshot.val().quantity) - parseInt(storeData.quantity)),
                    price: storeData.price,
                    store: storeData.store

                }
                let userRef = DB.database.ref(`/products/` + storeData.productID).update(total)

                let saleObject = {
                    store: storeData.store,
                    product: storeData.product,
                    quantity: storeData.quantity,
                    price: storeData.price,
                    date: storeData.date,
                    pic:storeData.pic
                }
                console.log('hhjjjjjjjjjjjjjjjjjjjjjjjjj', saleObject)

                return DB.database.ref('/sale').push(saleObject).then(() => {
                   
                    dispatch(SaleActionSuccess())
                     alert("sucessfully add data")
                    browserHistory.push('/main')

                })
                    .catch((error) => {
                        dispatch((SaleActionFailed(error)))
                        alert('failed')
                    })


            }





        }

        )



    }








}


export function SaleAction() {
    return {
        type: Actions.ADDSALEREQUEST
    }
}

export function SaleActionSuccess(data) {
    return {
        type: Actions.ADDSALEREQUESTSUCCESS,
        data
    }
}
export function SaleActionFailed() {
    return {
        type: Actions.ADDSALEREQUESTFAILED
    }
}
export default saleAction;
