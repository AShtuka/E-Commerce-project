import React from "react";

import {ListProductContainer} from '../../../containers'
import MainLayout from "../layouts/main-layout";

import './product-page.css'
import ListCategories from "../../list-category";

const ProductPage = () => {
    return (
        <MainLayout>
            <div className='shopping-page-container'>
                <div className='shopping-page-menu'>
                    <ListCategories />
                </div>
                <div className='shopping-page-items'>
                    <ListProductContainer />
                </div>
            </div>
        </MainLayout>
    )
};

export default ProductPage;