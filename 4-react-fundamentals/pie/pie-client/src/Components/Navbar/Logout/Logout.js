import React from 'react';
import'./Logout.css';
import logout from '../../../Assets/logout.png';

const Logout = (props) => {
    return (
        <img className="logout-img" scr={logout} alt="Logout" onClick={props.logout} />
    )
}

export default Logout;