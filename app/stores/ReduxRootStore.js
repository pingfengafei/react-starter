/**
 * Created by zad on 16/7/14.
 */
import {combineReducers, createStore} from 'redux';
import undoable, {distinctState} from 'redux-undo';
import {INCREASE, DECREASE} from '../actions/CounterAction';
import {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from '../actions/TodoAppAction';

function counter(state = {count: 0, text: 'default'}, action) {
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

function visibilityFilter(visibilityFilter = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return visibilityFilter;
    }
}

function todos(todos = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...todos,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case COMPLETE_TODO:
            return [
                ...todos.slice(0, action.index),
                Object.assign({}, todos[action.index], {
                    completed: true
                }),
                ...todos.slice(action.index + 1)
            ];
        default:
            return todos;
    }
}

const todoApp = createStore(combineReducers({
    visibilityFilter,
    todos: undoable(todos, {filter: distinctState()}),
    counter: undoable(counter, {filter: distinctState()})
}));

export default todoApp;