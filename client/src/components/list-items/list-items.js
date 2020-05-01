import React from "react";

import Item from "../item";

import './list-items.css';
import {useSelector} from "react-redux";

const ListItems = () => {

    const items = useSelector(state => state.goodsList.goods);

    return (
        <div className="items-container">
            {
                items.map(item => {
                    return <Item key={item.id}
                                 item={item}/>;
                })
            }
        </div>
    )
};

export default ListItems;
