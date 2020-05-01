import React, {Fragment} from "react";
import ShopHeader from "../../../shop-header";

import './main-layout.css'

const MainLayout = (props) => {
    return (
        <Fragment>
            <ShopHeader />
            <div className='main-container'>
                <div className='main-layout-container'>
                    {props.children}
                </div>
            </div>
        </Fragment>
    )
};

export default MainLayout;