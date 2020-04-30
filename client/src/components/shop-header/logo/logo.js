import React from "react";
import {Link} from "react-router-dom";
import './logo.css';

const Logo = () => {
    return (
        <Link to='/' className="brand-logo">
            <img className='logo' src="logo-nerf-full.png" alt="NOT FOUND"/>
        </Link>
    )
};

export default Logo;