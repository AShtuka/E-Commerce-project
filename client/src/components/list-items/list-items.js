import React from "react";

import Item from "../item";

import './list-items.css';

const ListItems = ({items, onAddedToCart}) => {
    return (
        <div className="row">
            {
                items.map(item => {
                    return <Item key={item.id}
                                 item={item}
                                 onAddedToCart={onAddedToCart}/>;
                })
            }
        </div>
    )
};

export default ListItems;
