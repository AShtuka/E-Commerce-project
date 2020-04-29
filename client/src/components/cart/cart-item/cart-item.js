import React from "react";
import './cart-item.css';
import {useDispatch} from "react-redux";
import {allItemsRemovedFromCart, itemAddedToCart, itemRemovedFromCart } from "../../../store/actions";

const CartItem = ({item}) => {

    const dispatch = useDispatch();

    const {title, imgUrl, price, count, total} = item;

    return (
        <tr>
            <td className='delete-column'>
                <span className="material-icons" onClick={() => dispatch(allItemsRemovedFromCart(item))}>highlight_off</span>
            </td>
            <td className='item-column'>
                <img className='cart-item-img' src={imgUrl} alt='NOT FOUND' />
                <span className='item-title'>{title}</span>
            </td>
            <td>$ {price}</td>
            <td className='cart-item-count'>
                <div className="btn-flat">
                    <span className="material-icons" onClick={() => dispatch(itemAddedToCart(item))}>add_circle_outline</span>
                </div>
                {count}
                <div className="btn-flat">
                    <span className="material-icons" onClick={() => dispatch(itemRemovedFromCart(item))}>remove_circle_outline</span>
                </div></td>
            <td>$ {total}</td>
        </tr>
    )
};

export default CartItem;