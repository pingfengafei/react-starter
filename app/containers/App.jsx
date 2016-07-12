import React, {Component} from 'react';
import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/TodoList/TodoList';
import Footer from '../components/Footer/Footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <AddTodo onAddClick={(text) => {console.log('add todo', text);}}/>
                <TodoList
                    todos={[{text: 'Use Redux',  completed: true }, {text: 'Learn to connect it to React',  completed: false}]}
                    onTodoClick={(todo) =>{console.log('todo clicked', todo);}}/>
                <Footer
                    filter='SHOW_COMPLETED'
                    onFilterChange={(filter) => {console.log('filter change', filter);}}/>
            </div>
        );
    }
}