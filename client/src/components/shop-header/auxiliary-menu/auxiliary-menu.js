import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import './auxiliary-menu.css'

const AuxiliaryMenu = () => {

    const cartItemsAmount = useSelector(state => state.shoppingCart.cartItemsAmount);

    return (
        <Fragment>
            <ul className="right hide-on-med-and-down">
                <li>
                    <Link to="/wish-list">
                        <span className="material-icons vertical-alight">favorite</span>
                    </Link>
                </li>
                <li>
                    <Link to="/personal-cabinet">
                        <span className="material-icons vertical-alight">account_circle</span>
                    </Link>
                </li>
            </ul>
            <ul className="right">
                <li>
                    <Link to="">
                        <span className="material-icons vertical-alight">search</span>
                    </Link>
                </li>
                <li className='cart'>
                    <Link to="/cart">
                        <span className="material-icons vertical-alight">shopping_cart</span>
                        <span className='cart-badge'>{cartItemsAmount}</span>
                    </Link>
                </li>
            </ul>
        </Fragment>
    );
};

export default AuxiliaryMenu;