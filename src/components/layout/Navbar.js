import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={props.icon} />{props.title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
}
export default Navbar
