import React from "react";
import {Link} from "react-router-dom";

import './shop-header.css'
import {useSelector} from "react-redux";

const ShopHeader = () => {

    const cartItemsAmount = useSelector(state => state.shoppingCart.cartItemsAmount);

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo">Logo</Link>
                <ul className="right">
                    <li  className='cart'>
                        <Link to="/cart">
                            <span className="material-icons">shopping_cart</span>
                            <span className='cart-badge'>{cartItemsAmount}</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
};

export default ShopHeader;
