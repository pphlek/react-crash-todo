import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header';
import Todos from './components/todo/Todos';
import AddTodo from './components/todo/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({ todos: res.data }));
    }

    addTodo = title => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        })
            .then(res => this.setState({ todos: [...this.state.todos, res.data] })); 
    }

    deleteTodo = id => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) }));
    }

    toggleComplete = id => {
        this.setState({
            todos: [...this.state.todos.map(todo => {
                if (todo.id === id)
                    todo.completed = !todo.completed;
                return todo;
            })]
        });
    }

    render() {
        return (
            <Router>
                <div className='App'>
                    <div className='container'>
                        <Header />
                        <Route exact path='/' render={props => (
                            <React.Fragment>
                                <AddTodo 
                                    addTodo={this.addTodo}
                                />
                                <Todos
                                    deleteTodo={this.deleteTodo}
                                    todos={this.state.todos}
                                    toggleComplete={this.toggleComplete}
                                />
                            </React.Fragment>
                        )}/>
                        <Route path='/about' component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
