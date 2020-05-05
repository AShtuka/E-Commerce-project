import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {itemAddedToCart} from "../../../store/actions/cart";

import './info-block.css';

const InfoBlock = ({item}) => {

    const {title, price, id} = item;
    const itemId = useSelector(state => state.shopItem.itemId);
    const dispatch = useDispatch();

    const showInfo = (id === itemId) ? 'shop-item-hide' : '';
    const showBuyBtn = (id === itemId) ? 'buy-btn-container' : 'buy-btn-container shop-item-hide';

    return (
        <div className='info-container'>
            <div className={showInfo}>
                <span className="card-title">{title}</span>
                <div className='buy-btn-mobile-container'>
                    <p className='price'>{price} $</p>
                    <span className="material-icons buy-btn-mobile"
                          onClick={() => dispatch(itemAddedToCart(item))}>shopping_cart</span>
                </div>
            </div>
            <div className={showBuyBtn}>
                <div className='buy-btn'
                     onClick={() => dispatch(itemAddedToCart(item))}>ADD TO CART</div>
            </div>
        </div>
    )
};

export default InfoBlock;