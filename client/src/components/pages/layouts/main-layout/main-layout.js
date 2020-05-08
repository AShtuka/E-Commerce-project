import React, {Fragment} from "react";
import ShopHeader from "../../../shop-header";

import './main-layout.css'
import Login from "../../../auth/login";

const MainLayout = (props) => {
    return (
        <Fragment>
            <ShopHeader />
            <Login />
            <div className='main-container'>
                <div className='main-layout-container'>
                    {props.children}
                </div>
            </div>
        </Fragment>
    )
};

export default MainLayout;