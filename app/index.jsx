import './style/style.less';
import 'bootstrap/less/bootstrap.less';
import '../node_modules/font-awesome/less/font-awesome.less';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Demo from './containers/Demo';
import TodoAppContainer from './containers/TodoAppContainer';
import Counter from './components/Counter/Counter';
import AsyncTest from './components/AsyncTest/AsyncTest';
import ReduxRootStore from './stores/ReduxRootStore';

import {Provider} from 'react-redux';

class TodoApp extends React.Component {
    render() {
        return (
            <Provider store={ReduxRootStore}>
                <TodoAppContainer />
            </Provider>
        );
    }
}

class Count extends React.Component {
    render() {
        return (
            <Provider store={ReduxRootStore}>
                <Counter />
            </Provider>
        );
    }
}

class Async extends React.Component {
    render() {
        return (
            <Provider store={ReduxRootStore}>
                <AsyncTest />
            </Provider>
        );
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Demo}>
            <Route path="/async" component={Async}/>
            <Route path="/count" component={Count}/>
            <Route path="/redux" component={TodoApp}/>
        </Route>
    </Router>, document.getElementById('example'));