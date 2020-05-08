import React from "react";
import './menu.css'
import PageMenu from "../../page-menu";

const menuItems = [
    {title: 'Personal Info', id: 0},
    {title: 'Orders', id: 1},
    {title: 'Wish List', id: 2},
    {title: 'Admin Page', id: 3},
    ];

const PersonalCabinetMenu = () => {
    return <PageMenu listItem={menuItems}/>
};

export default PersonalCabinetMenu;