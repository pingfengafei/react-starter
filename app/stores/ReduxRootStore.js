/**
 * Created by zad on 16/7/14.
 */
import {createStore} from 'redux';

import rootReducer from '../reducers/rootReducer';

const ReduxRootStore = createStore(rootReducer);

export default ReduxRootStore;