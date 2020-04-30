import React from "react";

import ListCategories from "../../list-categories";
import {ListItemsContainer} from '../../../containers'
import MainLayout from "../layouts/main-layout";

import './home-page.css'



const HomePage = () => {
    return (
        <MainLayout>
            <ListItemsContainer />
            <ListCategories/>
        </MainLayout>
    )
};

export default HomePage;