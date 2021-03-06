import React, {findDOMNode, Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const node = ReactDOM.findDOMNode(this.refs.input);
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }

    render() {
        return (
            <div>
                <input type='text' ref='input'/>
                <button onClick={this.handleClick}>
                    Add
                </button>
            </div>
        );
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};