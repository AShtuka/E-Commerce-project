import React from "react";
import './cart-item.css';

const CartItem = ({item, onIncrease, onDecrease, onDelete}) => {

    const {title, imgUrl, price, id, count, total} = item;

    return (
        <tr>
            <td className='delete-column'>
                <span className="material-icons" onClick={() => onDelete(id)}>highlight_off</span>
            </td>
            <td className='item-column'>
                <img className='cart-item-img' src={imgUrl} alt='NOT FOUND' />
                <span className='item-title'>{title}</span>
            </td>
            <td>$ {price}</td>
            <td className='cart-item-count'>
                <div className="btn-flat">
                    <span className="material-icons" onClick={() => onIncrease(id)}>add_circle_outline</span>
                </div>
                {count}
                <div className="btn-flat">
                    <span className="material-icons" onClick={() => onDecrease(id)}>remove_circle_outline</span>
                </div></td>
            <td>$ {total}</td>
        </tr>
    )
};

export default CartItem;