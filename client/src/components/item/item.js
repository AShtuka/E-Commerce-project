import React from "react";
import './item.css'

const Item = ({item, onAddedToCart}) => {
    const {title, price, imgUrl, id} = item;

    return (
            <div className="col s6 m6 l3 xl 2">
                <div className="card hoverable">
                    <div className="card-image">
                        <img src={imgUrl} alt='NOT FOUND' />
                    </div>
                    <div className="card-content center-align">
                        <span className="card-title">{title}</span>
                        <p>{price} $</p>
                    </div>
                    <div className="card-action center-align">
                        <div onClick={() => onAddedToCart(id)}>Add to cart</div>
                    </div>
                </div>
            </div>
            )
};

export default Item;