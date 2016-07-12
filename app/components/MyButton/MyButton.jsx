import React from 'react';
import './MyButton.less';

export default class FirstApp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var items = this.props.items;
        var itemHtml = items.map((listItem, i)=> {
            return <li key={i}>{listItem}</li>;
        });

        return (
            <div>
                <ul>{itemHtml}</ul>
                <button onClick={this.props.onClick}>New Item</button>
            </div>
        );
    }
}