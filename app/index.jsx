import './style/style.less';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import MyButtonController from './components/MyButton/MyButtonController';
import Demo from './containers/Demo';
import TodoAppContainer from './containers/TodoAppContainer';
import Counter from './components/Counter/Counter';
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

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Demo}>
            <Route path="/demo" component={MyButtonController}/>
            <Route path="/count" component={Count}/>
            <Route path="/redux" component={TodoApp}/>
        </Route>
    </Router>, document.getElementById('example'));