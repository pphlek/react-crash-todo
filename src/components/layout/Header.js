import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to='/react-todo'>Home</Link> | <Link style={linkStyle} to='/react-todo/about'>About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};

export default Header;
