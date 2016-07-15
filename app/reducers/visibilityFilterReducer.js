/**
 * Created by zad on 16/7/15.
 */
import {SET_VISIBILITY_FILTER, VisibilityFilters} from '../actions/TodoAppAction';

export default function visibilityFilter(visibilityFilter = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return visibilityFilter;
    }
}