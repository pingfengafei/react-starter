import React from 'react';
import './HelloWorld.less';

export default class HelloWorld extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="HelloWorld">
                Hello World!你好
            </div>
        );
    }
}