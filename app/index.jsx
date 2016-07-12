import './style/style.less';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import MyButtonController from './components/MyButton/MyButtonController';
import App from './components/App/App';
import Counter from './components/Counter/Counter';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/demo" component={MyButtonController}/>
            <Route path="/count" component={Counter}/>
        </Route>
    </Router>, document.getElementById('example'));