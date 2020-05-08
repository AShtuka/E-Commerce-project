import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import './auxiliary-menu.css'
import {loginFormOpen} from "../../../store/actions/login";

const AuxiliaryMenu = () => {

    const cartItemsAmount = useSelector(state => state.shoppingCart.cartItemsAmount);
    const dispatch = useDispatch();

    return (
        <Fragment>
            <ul className="right hide-on-med-and-down">
                <li>
                    <Link to="/wish-list">
                        <span className="material-icons vertical-alight">favorite</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" onClick={() => dispatch(loginFormOpen())}>
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