import React from "react";

import {ListItemsContainer} from '../../../containers'
import MainLayout from "../layouts/main-layout";

import './shopping-page.css'
import ListCategories from "../../list-categories";

const ShoppingPage = () => {
    return (
        <MainLayout>
            <div className='shopping-page-container'>
                <div className='shopping-page-menu'>
                    <ListCategories />
                </div>
                <div className='shopping-page-items'>
                    <ListItemsContainer />
                </div>
            </div>
        </MainLayout>
    )
};

export default ShoppingPage;