//styles
import './style/style.less';
import 'bootstrap/less/bootstrap.less';

//libs
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
// import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Container
import Demo from './containers/Demo';
import TodoAppContainer from './containers/TodoAppContainer';
import Counter from './components/Counter/Counter';
import AsyncTest from './components/AsyncTest/AsyncTest';

//store
import ReduxRootStore from './stores/ReduxRootStore';

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={ReduxRootStore}>
        <Router history={hashHistory}>
            <Route path="/" component={Demo}>
                <Route path="/async" component={AsyncTest}/>
                <Route path="/count" component={Counter}/>
                <Route path="/redux" component={TodoAppContainer}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('example'));