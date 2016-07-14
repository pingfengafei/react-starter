import {combineReducers, createStore} from 'redux';
import {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from './actions';
import undoable, {distinctState} from 'redux-undo';
const {SHOW_ALL} = VisibilityFilters;

function visibilityFilter(visibilityFilter = SHOW_ALL, action) {
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
    todos: undoable(todos, {filter: distinctState()})
}));

export default todoApp;