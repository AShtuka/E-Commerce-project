import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {itemAddedToCart} from "../../../store/actions/cart";
import Transition from "react-transition-group/Transition";

import './info-block.css';

const InfoBlock = ({item}) => {

    const {title, price, id} = item;
    const itemId = useSelector(state => state.shopItem.itemId);
    const dispatch = useDispatch();

    const showInfo = (id === itemId) ? 'shop-item-hide' : '';
    const showBuyBtn = (id === itemId) ? 'buy-btn-container' : 'buy-btn-container shop-item-hide';

    return (
        <div className='info-container'>
            <Transition in={(id === itemId)} timeout={200}>
                {
                    (state) => {
                        return (
                            <>
                                <div className={`${showInfo} ${state}`}>
                                    <span className="card-title">{title}</span>
                                    <div className='buy-btn-mobile-container'>
                                        <p className='price'>{price} $</p>
                                        <span className="material-icons buy-btn-mobile"
                                              onClick={() => dispatch(itemAddedToCart(item))}>shopping_cart</span>
                                    </div>
                                </div>
                                <div className={`${showBuyBtn} ${state}`}>
                                    <div className='buy-btn'
                                         onClick={() => dispatch(itemAddedToCart(item))}>ADD TO CART
                                    </div>
                                </div>
                            </>
                        )
                    }
                }
            </Transition>
        </div>
    )
};

export default InfoBlock;