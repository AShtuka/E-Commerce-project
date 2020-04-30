import React from "react";

import MobileMenu from "./mobile-menu";
import MainMenu from "./main-menu";
import Logo from "./logo";
import AuxiliaryMenu from "./auxiliary-menu";

import './shop-header.css'

const ShopHeader = () => {

    return (
        <nav>
            <div className="nav-wrapper">
                <MobileMenu />
                <Logo />
                <MainMenu />
               <AuxiliaryMenu />
            </div>
        </nav>
    )
};

export default ShopHeader;
