import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h1>Ghettohub Issues</h1>
                <ul role="nav">
                    <li><Link to="/demo" activeClassName="active123">Demo</Link></li>
                    <li><Link to="/boys" activeClassName="active123">男神</Link></li>
                    <li><Link to="/girls" activeClassName="active123">女神</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
