import './style/style.less';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Demo from './components/Demo/Demo';
import App from './components/App/App';
import Boy from './components/Boy/Boy';
import Boys from './components/Boys/Boys';
import Girls from './components/Girls/Girls';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/demo" component={Demo}/>
            <Route path="/boys" component={Boys}>
                <Route path="/boys/:boyName" component={Boy}/>
            </Route>
            <Route path="/girls" component={Girls}/>
        </Route>
    </Router>, document.getElementById('example'));