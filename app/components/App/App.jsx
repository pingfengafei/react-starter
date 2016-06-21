import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Ghettohub Issues</h1>
                <ul role="nav">
                    <li><Link to="/boys">男神们</Link></li>
                    <li><Link to="/girls">女神</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
