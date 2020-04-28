import React, {Fragment} from "react";
import './cart-checkout.css';

const CartCheckout = ({orderTotal}) => {
    return (
        <Fragment>
            <h4>AMOUNT OF ORDERS</h4>
            <table>
                <thead>
                    <tr>
                        <th/>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='table-title'>Delivery</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td className='table-title'>Total</td>
                        <td className='table-title'>$ {orderTotal}</td>
                    </tr>
                </tbody>
            </table>

            <div className="waves-effect waves-light btn-large checkout-btn">checkout</div>
        </Fragment>
    )
};

export default CartCheckout;