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
                        <img src={imgUrl} alt='NOT FOUND' />
                    </div>
                    <div className="card-content center-align">
                        <span className="card-title">{title}</span>
                        <p>{price} $</p>
                    </div>
                    <div className="card-action center-align cursor">
                        <div onClick={() => dispatch(itemAddedToCart(item))}>Add to cart</div>
                    </div>
                </div>
            </div>
            )
};

export default Item;