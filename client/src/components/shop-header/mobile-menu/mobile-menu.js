import React from "react";
import {Link} from "react-router-dom";
import './mobile-menu.css';

const MobileMenu = () => {
    return (
        <ul className="left menu-btn">
            <li>
                <Link to=''>
                    <span className="material-icons vertical-alight">menu</span>
                </Link>
            </li>
        </ul>
    )
};

export default MobileMenu;