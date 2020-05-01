import React from "react";

import {ListItemsContainer} from '../../../containers'
import MainLayout from "../layouts/main-layout";

import './home-page.css'



const HomePage = () => {
    return (
        <MainLayout>
            <ListItemsContainer />
        </MainLayout>
    )
};

export default HomePage;