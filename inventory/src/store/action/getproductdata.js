import Actions from './actionTypes'
import * as DB from '../../firebase/database'

export function getProductData(data) {
    return dispatch => {
        dispatch(productData());
        return DB.database.ref('/products').once('value', snap => {
            const todo = [];
            snap.forEach(childSnapshot => {
                var innerTodo = childSnapshot.val();
                innerTodo.key = childSnapshot.key;
                if (childSnapshot.hasChild('comments')) {
                    var customComments = Object.keys(childSnapshot.val().comments).map(key => { return { key: childSnapshot.val().comments[key] } })
                    console.log(customComments);
                    innerTodo.comments = customComments;
                    todo.push(innerTodo);
                } else {
                    todo.push(innerTodo);
                }
            })
            dispatch(productDataSuccess(todo))
        });
    }
}
function productData() {
    return {
        type: Actions.ProductData
    }
}

function productDataSuccess(data) {
    return {
        type: Actions.ProductDataSuccess,
        data
    }
}