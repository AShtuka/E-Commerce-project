import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {itemAddedToCart} from "../../../store/actions/cart";
import Transition from "react-transition-group/Transition";

import './info-block.css';

const InfoBlock = ({product}) => {

    const {title, price, id} = product;
    const productId = useSelector(state => state.product.productId);
    const dispatch = useDispatch();

    const showInfo = (id === productId) ? 'product-hide' : '';
    const showBuyBtn = (id === productId) ? 'buy-btn-container' : 'buy-btn-container product-hide';

    return (
        <div className='info-container'>
            <Transition in={(id === productId)} timeout={200}>
                {
                    (state) => {
                        return (
                            <>
                                <div className={`${showInfo} ${state}`}>
                                    <span className="card-title">{title}</span>
                                    <div className='buy-btn-mobile-container'>
                                        <p className='price'>{price} $</p>
                                        <span className="material-icons buy-btn-mobile"
                                              onClick={() => dispatch(itemAddedToCart(product))}>shopping_cart</span>
                                    </div>
                                </div>
                                <div className={`${showBuyBtn} ${state}`}>
                                    <div className='buy-btn'
                                         onClick={() => dispatch(itemAddedToCart(product))}>ADD TO CART
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