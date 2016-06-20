import React from 'react';
import './FirstApp.less';

export default class FirstApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {'keyword': 0};
        this.refreshKeyword = this.refreshKeyword.bind(this);
    }

    refreshKeyword() {
        this.setState({'keyword': ++this.state.keyword});
    }

    render() {
        var text = this.state.keyword;

        return (
            <div className="FirstApp">
                <ul>
                    <li>
                        <button onClick={this.refreshKeyword}>click me!!</button>
                    </li>
                    <li>{text}</li>
                </ul>
            </div>
        );
    }
}