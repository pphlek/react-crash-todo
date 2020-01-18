import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) =>  {
            const { ...rest } = todo;
         
            return (
                <TodoItem
                    deleteTodo={this.props.deleteTodo}
                    key={todo.id}
                    toggleComplete={this.props.toggleComplete}
                    {...rest}
                />
            );
        });   
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todos;
