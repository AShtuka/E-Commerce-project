import React from "react";

import {ListProductContainer} from '../../../containers'
import MainLayout from "../layouts/main-layout";

import './product-page.css'
import ListCategories from "../../list-category";
import PageContainer from "../layouts/page-container";

const ProductPage = () => {
    return (
        <MainLayout>
            <PageContainer
                menu={<ListCategories/>}
                content={<ListProductContainer/>}
            />
        </MainLayout>
    )
};

export default ProductPage;