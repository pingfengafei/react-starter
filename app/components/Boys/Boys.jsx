import React from 'react';
import {Link} from 'react-router';

export default class Boys extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>我的男神们：</h2>
                <ul>
                    <li><Link to="/boys/宋仲基">宋仲基</Link></li>
                    <li><Link to="/boys/吴亦凡">吴亦凡</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
