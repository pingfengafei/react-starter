import './style/style.less';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import MyButtonController from './components/MyButton/MyButtonController';
import Demo from './containers/Demo';
import TodoApp from './containers/App';
import TodoAppStore from './stores/TodoAppStore';
import Counter from './components/Counter/Counter';
import CounterStore from './stores/CounterStore';

import {Provider} from 'react-redux';

class Redux extends React.Component {
    render() {
        return (
            <Provider store={TodoAppStore}>
                <TodoApp />
            </Provider>
        );
    }
}

class Count extends React.Component {
    render() {
        return (
            <Provider store={CounterStore}>
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
            <Route path="/redux" component={Redux}/>
        </Route>
    </Router>, document.getElementById('example'));