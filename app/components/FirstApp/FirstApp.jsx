import React from 'react';
import './FirstApp.less';

import fakeData from '../../data/data.json';

export default class FirstApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {'keyword': 0};
        this.refreshKeyword = this.refreshKeyword.bind(this);
    }

    componentDidMount() {
        $.ajax({
            type: 'get',
            url: 'http://10.10.0.55:8080/home/getFinishedSpid',
            timeout: 20000,
            success: function (data) {
                console.log(data);
            },
            error: function (e) {
                console.log(fakeData);
            }
        });
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