import React from 'react';
import {Link} from 'react-router';

export default class Boys extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log('Boys');
    }

    handleSubmit(event) {
        event.preventDefault();
        const boyName = event.target.elements[0].value;
        const path = `/boys/${boyName}`;
        console.log(path);
        this.context.router.push(path);
    }

    render() {
        return (
            <div>
                <h2>我的男神们：</h2>
                <ul>
                    <li><Link to="/boys/宋仲基">宋仲基</Link></li>
                    <li><Link to="/boys/吴亦凡">吴亦凡</Link></li>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="boyName"/> / {' '}
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

Boys.contextTypes = {
    router: React.PropTypes.object
};
