/**
 * Created by zad on 16/7/15.
 */
import {combineReducers} from 'redux';
import undoable, {distinctState} from 'redux-undo';

import visibilityFilter from './VisibilityFilterReducer';
import todos from './TodosReducer';
import counter from './CounterReducer';
import async from './AsyncReducer';

const rootReducer = combineReducers({
    visibilityFilter,
    async: async,
    todos: undoable(todos, {filter: distinctState()}),
    counter: undoable(counter, {filter: distinctState()})
});

export default rootReducer;