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
                    <li><Link to="/count" activeClassName="active123">count</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
