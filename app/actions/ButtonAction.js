/**
 * Created by zad on 16/6/21.
 */
import AppDispatcher from '../dispatcher/AppDispatcher';

var ButtonAction = {
    addNewItem: function (text) {
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        });
    }
};

export default ButtonAction;