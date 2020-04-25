import React from "react";

import MainLayout from "../layouts/main-layout";
import ListCartItems from "../../cart/list-cart-items";
import CartCheckout from "../../cart/cart-checkout";

import './cart-page.css'


const CartPage =() => {
    return (
        <MainLayout>
            <div className='cart-page-container'>
                <ListCartItems />
                <CartCheckout />
            </div>
        </MainLayout>
    );
};

export default CartPage;