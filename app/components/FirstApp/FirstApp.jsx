import React from 'react';
import './FirstApp.less';

import fakeData from '../../data/data.json';

export default class FirstApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {'keyword': 0};
        this.refreshKeyword = this.refreshKeyword.bind(this);
    }

    sum(array, len) {
        if (len == 1) {
            return array[0];
        } else {
            return this.sum(array, len - 1) + array[len - 1];
        }
    }

    componentDidMount() {
        $.ajax({
            type: 'get',
            url: 'http://10.10.0.55:8088/home/getFinishedSpid',
            timeout: 20000,
            success: function (data) {
                console.log(data);
            },
            error: function (e) {
                console.log(fakeData);
            }
        });

        var testArray = [1, 2, 3];
        console.log('递归求和:' + this.sum(testArray, testArray.length));

        var sum = _.reduce(testArray, ((x, y)=>x + y), 0);
        console.log('lodash递归求和:' + sum);
        console.log('lodash自带方法求和:' + _.sum(testArray));
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