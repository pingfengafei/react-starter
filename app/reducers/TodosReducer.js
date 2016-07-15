/**
 * Created by zad on 16/7/15.
 */
import {ADD_TODO, COMPLETE_TODO} from '../actions/TodoAppAction';

export default function todos(todos = [], action) {
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