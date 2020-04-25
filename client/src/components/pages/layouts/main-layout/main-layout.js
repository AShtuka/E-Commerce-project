import React, {Fragment} from "react";
import ShopHeader from "../../../shop-header";

import './main-layout.css'

const MainLayout = (props) => {
    return (
        <Fragment>
            <ShopHeader />
            <div className='main-layout-container'>
                {props.children}
            </div>
        </Fragment>
    )
};

export default MainLayout;