/**
 * Created by zad on 16/6/21.
 */
import AppDispatcher from '../dispatcher/AppDispatcher';

var ButtonAction = {
    createNewItem(text) {
        AppDispatcher.dispatch({
            actionType: 'CREATE_NEW_ITEM',
            text: text
        });
    }
};

export default ButtonAction;