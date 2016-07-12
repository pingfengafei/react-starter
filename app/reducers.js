import {combineReducers} from 'redux';
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from './actions';
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
        case TOGGLE_TODO:
            return todos.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        default:
            return todos;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;