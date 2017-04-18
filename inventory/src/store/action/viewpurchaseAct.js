import Actions from './actionTypes'
import * as DB from '../../firebase/database'
function viewPurchaseRequest() {
    return dispatch => {
        dispatch(ViewPurchaseReques());
        return DB.database.ref('/purchase').once('value', snap => {
            var purchaseData = [];
            snap.forEach(ChildSnapshot => {
                var data = ChildSnapshot.val();
                purchaseData.push(data);
            })
            console.log("daaaaaaaaaaaaaaa", purchaseData)
            dispatch(ViewPurchaseRequestSuccess(purchaseData))
        })
    }
}



export function ViewPurchaseReques() {
    return {
        type: Actions.VIEWPURCHASE
    }
}


export function ViewPurchaseRequestSuccess(data) {
    return {
        type: Actions.VIEWPURCHASESUCCESS,
        data
    }
}


export function ViewPurchaseRequestFailed() {
    return {
        type: Actions.VIEWPURCHASEFAILED
    }
}

export default viewPurchaseRequest;