import React, {Component, PropTypes} from 'react';
import Todo from '../Todo/Todo';

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => {
                        return <Todo {...todo} key={index} onClick={() => this.props.onTodoClick(index)}/>;
                    }
                )}
            </ul>
        );
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
};