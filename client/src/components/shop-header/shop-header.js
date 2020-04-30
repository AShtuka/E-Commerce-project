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
                <ul className="hide-on-med-and-down header-center-block">
                    <li>
                        <Link to="/cart">CATALOG</Link>
                    </li>
                    <li>
                        <Link to="/cart">DELIVERY</Link>
                    </li>
                    <li>
                        <Link to="/cart">BLOG</Link>
                    </li>
                    <li>
                        <Link to="/cart">CONTACT</Link>
                    </li>
                </ul>
                <ul className="right hide-on-med-and-down vertical-alight">
                    <li className='cart'>
                        <Link to="/cart">
                            <span className="material-icons">favorite</span>
                        </Link>
                    </li>
                </ul>
                <ul className="right vertical-alight">
                    <li>
                        <Link to="/cart">
                            <span className="material-icons">search</span>
                        </Link>
                    </li>
                    <li className='cart'>
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
