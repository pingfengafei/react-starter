import {createStore} from 'redux';
import CounterAction from '../actions/CounterAction';

const CounterStore = createStore(counter);

function mapStateToProps(state) {
    return {
        value: state.count
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(CounterAction)
    };
}

function counter(state = {count: 0}, action) {
    const count = state.count;
    switch (action.type) {
        case 'increase':
            return {count: count + 1};
        default:
            return state;
    }
}

export {mapDispatchToProps, mapStateToProps};
export default CounterStore;