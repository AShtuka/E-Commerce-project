import React from "react";
import './item.css'
import {useDispatch, useSelector} from "react-redux";
import {itemAddedToCart} from '../../store/actions/cart';
import {shopItemLoseHover, shopItemHover} from "../../store/actions/shop-item";

const Item = ({item}) => {
    const {title, price, imgUrl, id} = item;
    const itemId = useSelector(state => state.shopItem.itemId);

    const dispatch = useDispatch();
    const img = (id === itemId) ? imgUrl[1] : imgUrl[0];
    const showInfo = (id === itemId) ? 'shop-item-hide' : '';
    const showBuyBtn = (id === itemId) ? 'buy-btn-container' : 'buy-btn-container shop-item-hide';

    return (
            <div className="item-container">
                <div className="card hoverable"
                     onMouseOver={() => dispatch(shopItemHover(id))}
                     onMouseLeave={() => dispatch(shopItemLoseHover())}
                >
                    <div className="card-image">
                        <img src={img} alt='NOT FOUND' />
                    </div>
                    <div className="card-content">
                        <div className='evaluative-container'>
                            <div className='stars'>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star_half</span>
                                <span className="material-icons">star_outline</span>
                            </div>
                            <div>
                                <span className="material-icons">favorite_outline</span>
                            </div>
                        </div>
                        <div className='info-container'>
                            <div className={showInfo}>
                                <span className="card-title">{title}</span>
                                <p className='price'>{price} $</p>
                            </div>
                            <div className={showBuyBtn}>
                                <div className='buy-btn' onClick={() => dispatch(itemAddedToCart(item))}>ADD TO CART</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
};

export default Item;