import React from "react";
import './item.css'
import {useDispatch} from "react-redux";
import {itemAddedToCart} from '../../store/actions'

const Item = ({item}) => {
    const {title, price, imgUrl} = item;

    const dispatch = useDispatch();

    return (
            <div className="item-container">
                <div className="card hoverable">
                    <div className="card-image">
                        <img src={imgUrl[0]} alt='NOT FOUND' />
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
                            <span className="card-title">{title}</span>
                            <p className='price'>{price} $</p>
                            <div className='buy-btn-container'>
                                <div className='buy-btn' onClick={() => dispatch(itemAddedToCart(item))}>ADD TO CART</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
};

export default Item;