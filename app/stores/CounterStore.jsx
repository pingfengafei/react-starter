import {createStore} from 'redux';

function mapStateToProps(state) {
    return {
        value: state.count,
        text: state.text
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: (text) => dispatch({type: 'increase', text: text}),
        onDecreaseClick: (text) => dispatch({type: 'decrease', text: text})
    };
}

//reducer
function counter(state = {count: 0}, action) {
    const count = state.count;
    switch (action.type) {
        case 'increase':
            return {count: count + 1, text: action.text};
        case 'decrease':
            return {count: count - 1, text: action.text};
        default:
            return state;
    }
}

const CounterStore = createStore(counter);

export {mapDispatchToProps, mapStateToProps};
export default CounterStore;