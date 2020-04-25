import React from "react";
import './cart-item.css';

const CartItem = () => {
    return (
        <tr>
            <td className='delete-column'><span className="material-icons">highlight_off</span></td>
            <td className='item-column'>
                <img className='cart-item-img' src="https://nerf.com.ua/wp-content/uploads/2017/04/test-2.jpg" alt='NOT FOUND' />
                <span className='item-title'>BLASTER NERF ELITE DISRUPTOR</span>
            </td>
            <td>$345</td>
            <td className='cart-item-count'>
                <div className="btn-flat">
                    <span className="material-icons">add_circle_outline</span>
                </div>
                1
                <div className="btn-flat">
                    <span className="material-icons">remove_circle_outline</span>
                </div></td>
            <td>$345</td>
        </tr>
    )
};

export default CartItem;