import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className='container'>
                <Link to='/' className="navbar-brand">Contacts</Link>
                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <button type='button' className='btn btn-light  shadow shadow-lg'
                                onClick={() => navigate('add')}>Add contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;