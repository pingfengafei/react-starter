import React from 'react';
import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/TodoList/TodoList';
import Footer from '../components/Footer/Footer';

import {connect} from 'react-redux';
import {ActionCreators} from 'redux-undo';
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from '../actions/TodoAppAction';

import ReduxRootStore from '../stores/ReduxRootStore';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
        this.setVisibilityFilter = this.setVisibilityFilter.bind(this);
        this.onUndo = this.onUndo.bind(this);
        this.onRedo = this.onRedo.bind(this);
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

    onUndo() {
        this.props.onUndo();
    }

    onRedo() {
        this.props.onRedo();
    }

    render() {
        console.log({
            visibilityFilter: ReduxRootStore.getState().visibilityFilter,
            todos: ReduxRootStore.getState().todos
        });
        return (
            <div>
                <AddTodo onAddClick={this.addTodo}/>
                <TodoList
                    todos={this.props.visibleTodos}
                    onTodoClick={this.completeTodo}/>
                <Footer
                    filter={this.props.visibilityFilter}
                    onFilterChange={this.setVisibilityFilter}
                    onUndo={this.onUndo}
                    onRedo={this.onRedo}
                    undoDisabled={this.props.undoDisabled}
                    redoDisabled={this.props.redoDisabled}/>
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

function selectTodos(todos, visibilityFilter) {
    switch (visibilityFilter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

function selectState(state) {
    const presentTodos = state.todos.present;
    return {
        undoDisabled: state.todos.past.length === 0,
        redoDisabled: state.todos.future.length === 0,
        visibleTodos: selectTodos(presentTodos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}

function selectFunc(dispatch) {
    return {
        addTodo: (text) => dispatch(addTodo(text)),
        completeTodo: (index) => dispatch(completeTodo(index)),
        setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
        onUndo: () => dispatch(ActionCreators.undo()),
        onRedo: () => dispatch(ActionCreators.redo())
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(selectState, selectFunc)(App);