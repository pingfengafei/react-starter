import './style/style.less';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import MyButtonController from './components/MyButton/MyButtonController';
import Demo from './containers/Demo';
import App from './containers/App';
import Counter from './components/Counter/Counter';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducers';

let store = createStore(todoApp);

class ABC extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Demo}>
            <Route path="/demo" component={MyButtonController}/>
            <Route path="/count" component={Counter}/>
            <Route path="/redux" component={ABC}/>
        </Route>
    </Router>, document.getElementById('example'));