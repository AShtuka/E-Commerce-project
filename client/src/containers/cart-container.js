import React, {Fragment} from "react";

import CartItemsList from '../components/cart/list-cart-items';
import CartCheckout from "../components/cart/cart-checkout";


const CartContainer = () => {
    return(
        <Fragment>
            <CartItemsList />
            <CartCheckout />
        </Fragment>
    )
};

export default CartContainer;