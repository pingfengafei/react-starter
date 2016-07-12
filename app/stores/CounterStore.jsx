import {createStore} from 'redux';
import  CounterAction from '../actions/CounterAction';

function mapStateToProps(state) {
    return {
        value: state.count,
        text: state.text
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: (text) => dispatch(CounterAction.increase(text)),
        onDecreaseClick: (text) => dispatch(CounterAction.decrease(text))
    };
}

//reducer
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

export {mapDispatchToProps, mapStateToProps};
export default CounterStore;