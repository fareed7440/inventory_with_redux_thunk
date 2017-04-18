import Actions from './actionTypes'
import * as DB from '../../firebase/database'

export function getStoreData(data) {
    return dispatch => {
        // dispatch(storeData());
        return DB.database.ref('/stores').once('value', snap => {
            // var data = snap.val();
            var arr = [];
            snap.forEach(ChildSnapshot => {
                var data = ChildSnapshot.val();
                arr.push(data);
            })
            // console.log("daaaaaaaaaaaaaaa" , arr)
            dispatch(storeDataSuccess(arr))
        })
    }
}
function storeData() {
    return {
        type: Actions.storeData
    }
}

function storeDataSuccess(data) {
    return {
        type: Actions.storeDataSuccess,
        data
    }
}