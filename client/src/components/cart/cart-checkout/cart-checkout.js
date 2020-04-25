import React, {Fragment} from "react";
import './cart-checkout.css';

const CartCheckout = () => {
    return (
        <Fragment>
            <h4>AMOUNT OF ORDERS</h4>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='table-title'>Delivery</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td className='table-title'>Total</td>
                    <td className='table-title'>$345</td>
                </tr>
                </tbody>
            </table>

            <div className="waves-effect waves-light btn-large checkout-btn">checkout</div>
        </Fragment>
    )
};

export default CartCheckout;