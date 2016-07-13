import {createStore} from 'redux';

function counter(state = {count: 0, text: ''}, action) {
    const count = state.count;
    switch (action.type) {
        case 'INCREASE':
            return {count: count + 1, text: action.text};
        case 'DECREASE':
            return {count: count - 1, text: action.text};
        default:
            return state;
    }
}

const CounterStore = createStore(counter);

export default CounterStore;