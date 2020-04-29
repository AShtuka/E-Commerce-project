import React, {Fragment} from "react";
import CartItem from "../cart-item";

import './list-cart-items.css';
import {useSelector} from "react-redux";

const ListCartItems = () => {

    const cartItems = useSelector(state => state.shoppingCart.cartItems);

    return(
        <Fragment>
            <h1>Your order</h1>
            <table>
                <thead>
                    <tr>
                        <th/>
                        <th>Item</th>
                        <th>Price</th>
                        <th className='cart-item-count'>Count</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody>
                    {cartItems.map((item) => <CartItem
                        item={item}
                        key={item.id}/>)}
                </tbody>
            </table>
        </Fragment>
    )
};

export default ListCartItems;