import React from 'react';
import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/TodoList/TodoList';
import Footer from '../components/Footer/Footer';

import {connect} from 'react-redux';
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from '../actions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
        this.setVisibilityFilter = this.setVisibilityFilter.bind(this);
    }

    addTodo(text) {
        this.props.addTodo(text);
    }

    completeTodo(index) {
        this.props.completeTodo(index);
    }

    setVisibilityFilter(filter) {
        this.props.setVisibilityFilter(filter);
    }

    render() {
        return (
            <div>
                <AddTodo onAddClick={this.addTodo}/>
                <TodoList
                    todos={this.props.visibleTodos}
                    onTodoClick={this.completeTodo}/>
                <Footer
                    filter={ this.props.visibilityFilter}
                    onFilterChange={this.setVisibilityFilter}/>
            </div>
        );
    }
}

App.propTypes = {
    visibleTodos: React.PropTypes.arrayOf(React.PropTypes.shape({
        text: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: React.PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
};

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

function selectState(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}

function selectFunc(dispatch) {
    return {
        addTodo: (text) => dispatch(addTodo(text)),
        completeTodo: (index) => dispatch(completeTodo(index)),
        setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter))
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(selectState, selectFunc)(App);