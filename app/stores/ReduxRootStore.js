/**
 * Created by zad on 16/7/14.
 */
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/RootReducer';

const ReduxRootStore = createStore(rootReducer,applyMiddleware(thunk));

export default ReduxRootStore;