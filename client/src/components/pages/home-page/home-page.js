import React, {Fragment} from "react";

import ShopHeader from "../../shop-header";
import ListItems from "../../list-items";

import './home-page.css'

const HomePage = () => {
    return (
        <Fragment>
            <ShopHeader />
            <ListItems />
        </Fragment>
    )
};

export default HomePage;