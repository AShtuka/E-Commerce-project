import React from "react";

import MainLayout from "../layouts/main-layout";
import {CartContainer} from '../../../containers'

import './cart-page.css'


const CartPage =() => {
    return (
        <MainLayout>
            <div className='cart-page-container'>
                <CartContainer />
            </div>
        </MainLayout>
    );
};

export default CartPage;