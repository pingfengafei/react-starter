import {createStore} from 'redux';

//reducer中定义的state,最终会被react-redux中的connect中的mapStateToProps用到,并最终转变为组件的props
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