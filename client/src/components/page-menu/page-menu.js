import React from "react";
import './page-menu.css';
import {Link} from "react-router-dom";

const PageMenu = (props) => {
    const {listItem} = props;

    return (
        <div className="collection">
            {listItem.map(item => <Item item={item} key={item.id}/>)}
        </div>
    )
};

const Item = ({item : {title, amount}}) => {

    return  <Link to="/shopping-page" className="collection-item">
        <span className="material-icons category-arrow">arrow_right</span>
        {title}
        {amount ? ` (${amount}) ` : ''}

    </Link>
};
export default PageMenu;