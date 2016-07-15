/**
 * Created by zad on 16/7/15.
 */
import {AUTHORIZE, AUTHORIZE_SUCCESS, AUTHORIZE_FAIL} from '../actions/AsyncAction';
export default function (state = {text: {}, status: 'wait'}, action) {
    switch (action.type) {
        case AUTHORIZE:
            return {text: action.data, status: 'onprogress'};
        case AUTHORIZE_SUCCESS:
            return {text: action.data, status: 'success'};
        case AUTHORIZE_FAIL:
            return {text: action.data, status: 'fail'};
        default:
            return state;
    }
}