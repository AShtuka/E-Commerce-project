import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import ListCategoriesContainer from "../../../containers/list-categories-container";
import {useDispatch, useSelector} from "react-redux";
import {listCategoryShow, listCategoryHidden, listCategoryLostHover} from "../../../store/actions/shop-header";

import './main-menu.css';

const MainMenu = () => {

    const dispatch = useDispatch();
    const appearance = useSelector(state => state.shopHeaderMainMenu.appearance);
    const isHover = useSelector(state => state.shopHeaderMainMenu.hover);
    const showListCategory = appearance ? 'list-category-container appearance' : 'list-category-container';

    useEffect(() => {
        let timer;
        if (!isHover) {
            timer = setTimeout(() => {
                dispatch(listCategoryHidden())
            }, 700)
        };
        return () => clearTimeout(timer);
    });

    return (
        <ul className="hide-on-med-and-down header-center-block">
            <li className='catalog-btn'
                onMouseOver={() => dispatch(listCategoryShow())}
                onMouseLeave={() => dispatch(listCategoryLostHover())}
            >
                <Link to="/catalog">CATALOG</Link>
            </li>
            <div className={showListCategory}
                 onMouseOver={() => dispatch(listCategoryShow())}
                 onMouseLeave={() => dispatch(listCategoryLostHover())}
                 onClick={() => dispatch(listCategoryHidden())}
            >
                <ListCategoriesContainer />
            </div>
            <li>
                <Link to="/delivery">DELIVERY</Link>
            </li>
            <li>
                <Link to="/blog">BLOG</Link>
            </li>
            <li>
                <Link to="/contact">CONTACTS</Link>
            </li>
            <li>
                <Link to="/personal-cabinet">CABINET</Link>
            </li>
        </ul>
    )
};

export default MainMenu;