import React from 'react'
import {Link} from 'react-router'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>明星特区</h1>
                <ul role="nav">
                    <li><Link to="/demo">Demo</Link></li>
                    <li><Link to="/boys">男神</Link></li>
                    <li><Link to="/girls">女神</Link></li>
                </ul>
            </div>
        )
    }
}
