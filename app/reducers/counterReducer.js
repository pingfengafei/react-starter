/**
 * Created by zad on 16/7/15.
 */
import {INCREASE, DECREASE} from '../actions/CounterAction';
export default function counter(state = {count: 0, text: 'default'}, action) {
    const count = state.count;
    switch (action.type) {
        case INCREASE:
            return {count: count + 1, text: action.text};
        case DECREASE:
            return {count: count - 1, text: action.text};
        default:
            return state;
    }
}