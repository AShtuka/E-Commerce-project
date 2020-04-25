import React, {Fragment} from "react";
import {connect} from 'react-redux';

import {itemAddedToCart, allItemsRemovedFromCart, itemRemovedFromCart} from "../actions";

import CartItemsList from '../components/cart/list-cart-items';
import CartCheckout from "../components/cart/cart-checkout";


const CartContainer = ({items, onIncrease, onDecrease, onDelete, orderTotal}) => {
    return(
        <Fragment>
            <CartItemsList items={items}
                           onIncrease={onIncrease}
                           onDecrease={onDecrease}
                           onDelete={onDelete} />
            <CartCheckout orderTotal={orderTotal}/>
        </Fragment>
    )
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return {
        items: cartItems,
        orderTotal
    }
};

const mapDispatchToProps =  {
    onIncrease: itemAddedToCart,
    onDecrease: itemRemovedFromCart,
    onDelete: allItemsRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);