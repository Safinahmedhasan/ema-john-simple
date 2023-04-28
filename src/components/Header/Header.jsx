import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';



const Header = () => {


    const {user,  logOut} = useContext(AuthContext);
    console.log(user);

    const handleLogOut = ()=>{
        logOut()
        .then(result => {})
        .catch(error => console.error(error));
    }


    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">shop</Link>
                <Link to="/oders">oders</Link>
                <Link to="/inventory">inventory</Link>
                <Link to="/login">login</Link>
                <Link to="/signup">Sign Up</Link>
                {user && <span className='text-white'>Welcome {user.email} <button onClick={handleLogOut}>Sign Out</button> </span>}
            </div>
        </nav>
    );
};

export default Header;