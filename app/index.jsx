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
    <Router history={hashHistory}>
        <Route path="/" component={Demo}>
            <Route path="/async" component={Async}/>
            <Route path="/count" component={Count}/>
            <Route path="/redux" component={TodoApp}/>
        </Route>
    </Router>, document.getElementById('example'));