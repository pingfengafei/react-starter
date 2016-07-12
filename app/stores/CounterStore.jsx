import {createStore} from 'redux';

function mapStateToProps(state) {
    return {
        value: state.count
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch({type: 'increase'}),
        onDecreaseClick: () => dispatch({type: 'decrease'})
    };
}

//reducer
function counter(state = {count: 0}, action) {
    const count = state.count;
    switch (action.type) {
        case 'increase':
            return {count: count + 1};
        case 'decrease':
            return {count: count - 1};
        default:
            return state;
    }
}

const CounterStore = createStore(counter);

export {mapDispatchToProps, mapStateToProps};
export default CounterStore;