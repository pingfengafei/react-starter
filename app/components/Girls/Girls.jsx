import React from 'react';
import {Link} from 'react-router';

export default class Girls extends React.Component {
    render() {
        return (
            <div>
                <h1>明星特区</h1>
                <ul role="nav">
                    <li><Link to="/demo" activeClassName="active123">Demo</Link></li>
                    <li><Link to="/boys" activeClassName="active123">男神</Link></li>
                    <li><Link to="/girls" activeClassName="active123">女神</Link></li>
                </ul>
                <div>我是女神！</div>
            </div>

        );
    }
}
