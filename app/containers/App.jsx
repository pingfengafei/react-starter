import React from 'react';
import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/TodoList/TodoList';
import Footer from '../components/Footer/Footer';

import {connect} from 'react-redux';
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from '../actions';

class App extends React.Component {
    render() {
        // Injected by connect() call:
        const {dispatch, visibleTodos, visibilityFilter} = this.props;
        return (
            <div>
                <AddTodo onAddClick={(text) => {dispatch(addTodo(text));}}/>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index =>{
                        dispatch(completeTodo(index));
                    }}/>
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter =>{
                        dispatch(setVisibilityFilter(nextFilter));
                    }}/>
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

function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App);