import React from "react";
import './cart-page.css'

const CartPage =() => {
    return (
        <div className='cart-page-container'>
            <h1>Your order</h1>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Price</th>
                        <th className='cart-item-count'>Count</th>
                        <th>Total</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td className='delete-column'><span className="material-icons">highlight_off</span></td>
                        <td className='item-column'>
                            <img className='cart-item-img' src="https://nerf.com.ua/wp-content/uploads/2017/04/test-2.jpg" alt='NOT FOUND' />
                            <span className='item-title'>BLASTER NERF ELITE DISRUPTOR</span>
                        </td>
                        <td>$345</td>
                        <td className='cart-item-count'>
                            <a className="btn-flat">
                                <span className="material-icons">add_circle_outline</span>
                            </a>
                            1
                            <a className="btn-flat">
                                <span className="material-icons">remove_circle_outline</span>
                            </a></td>
                        <td>$345</td>
                    </tr>
                    <tr>
                        <td className='delete-column'><span className="material-icons">highlight_off</span></td>
                        <td className='item-column'>
                            <img className='cart-item-img' src="https://nerf.com.ua/wp-content/uploads/2017/04/test-2.jpg" alt='NOT FOUND' />
                            <span className='item-title'>BLASTER NERF ELITE DISRUPTOR</span>
                        </td>
                        <td>$345</td>
                        <td className='cart-item-count'>
                            <a className="btn-flat">
                                <span className="material-icons">add_circle_outline</span>
                            </a>
                            1
                            <a className="btn-flat">
                                <span className="material-icons">remove_circle_outline</span>
                            </a></td>
                        <td>$345</td>
                    </tr>
                    </tbody>
                </table>


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

            <a className="waves-effect waves-light btn-large checkout-btn">checkout</a>

        </div>
    );
};

export default CartPage;