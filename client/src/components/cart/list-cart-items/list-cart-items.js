import React, {Fragment} from "react";
import CartItem from "../cart-item";

import './list-cart-items.css';

const ListCartItems = ({items, onIncrease, onDecrease, onDelete}) => {
    return(
        <Fragment>
            <h1>Your order</h1>
            <table>
                <thead>
                    <tr>
                        <th/>
                        <th>Item</th>
                        <th>Price</th>
                        <th className='cart-item-count'>Count</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item) => <CartItem
                        item={item}
                        onIncrease={onIncrease}
                        onDecrease={onDecrease}
                        onDelete={onDelete}
                        key={item.id}/>)}
                </tbody>
            </table>
        </Fragment>
    )
};

export default ListCartItems;