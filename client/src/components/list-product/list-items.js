import React from "react";

import Item from "../product";

import './list-items.css';
import {useSelector} from "react-redux";

const ListItems = () => {

    const products = useSelector(state => state.listProduct.products);

    return (
        <div className="items-container">
            {
                products.map(product => {
                    return <Item key={product.id}
                                 product={product}/>;
                })
            }
        </div>
    )
};

export default ListItems;
