import React from 'react';
import './Navbar.css';
import peacanpie from '../../Assets/peacanpie.jpg';
import Logout from './Logout/Logout';

const Navbar = (props) => {
    return (
        <nav>
            <img className="nav-img" src={peacanpie} alt="Pie" />
            <h1>Pie Client</h1>
            <Logout />
        </nav>
    )
}

export default Navbar;
