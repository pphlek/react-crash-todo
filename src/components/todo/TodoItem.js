import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends PureComponent {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.completed ? 'line-through' : 'none'
        };
    }

    render() {
        const { id, title } = this.props;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.toggleComplete.bind(this, id)} checked={this.props.completed}/>
                    {' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    completed: PropTypes.bool.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    toggleComplete: PropTypes.func.isRequired
};

const btnStyle = {
    background: '#ff0000',
    border: 'none',
    borderRadius: '50%',
    color: '#fff',
    cursor: 'pointer',
    float: 'right',
    padding: '5px 9px'
};

export default TodoItem;
