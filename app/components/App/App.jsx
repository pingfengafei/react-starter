import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let promise = new Promise(function (resolve, reject) {
            var a = Math.random();
            if (a > 0.5) {
                resolve('go');
            } else {
                reject('error');
            }
        });

        promise.then((value)=> {
            console.log(value);
        }, (error)=> {
            console.log(error);
        });

        var p1 = new Promise(function (resolve) {
            setTimeout(function () {
                resolve("Hello");
            }, 3000);
        });

        var p2 = new Promise(function (resolve) {
            setTimeout(function () {
                resolve("World");
            }, 1000);
        });

        Promise.all([p1, p2]).then(function (result) {
            console.log(result); // ["Hello", "World"]
        });

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
