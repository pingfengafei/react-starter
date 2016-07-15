/**
 * Created by zad on 16/7/15.
 */
import {combineReducers} from 'redux';
import undoable, {distinctState} from 'redux-undo';

import visibilityFilter from '../reducers/visibilityFilterReducer';
import todos from '../reducers/todosReducer';
import counter from '../reducers/counterReducer';

const rootReducer = combineReducers({
    visibilityFilter,
    todos: undoable(todos, {filter: distinctState()}),
    counter: undoable(counter, {filter: distinctState()})
});

export default rootReducer;