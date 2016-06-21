import './style/style.less';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'
import MyButtonController from './components/MyButtonController/MyButtonController';
import App from './components/App/App';
import Boys from './components/Boys/Boys';
import Girls from './components/Girls/Girls';

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {w: window.innerWidth};
        this.handleResize = this.handleResize.bind(this);
    }

    handleResize() {
        this.setState({
            w: window.innerWidth
        });
    }

    componentDidMount() {
        window.addEventListener('resize', _.throttle(this.handleResize, 600, {'trailing': false}));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', _.throttle(this.handleResize, 600, {'trailing': false}));
    }

    render() {
        return (
            <div>
                <div>width:{this.state.w}</div>
                <MyButtonController/>
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/demo" component={Demo}/>
        <Route path="/boys" component={Boys}/>
        <Route path="/girls" component={Girls}/>
    </Router>, document.getElementById('example'));