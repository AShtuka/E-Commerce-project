import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Transition from "react-transition-group/Transition";
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
            <Transition in={appearance} timeout={200}>
                {
                    (state) => {
                        return (
                            <div className={`${showListCategory} ${state}`}
                                 onMouseOver={() => dispatch(listCategoryShow())}
                                 onMouseLeave={() => dispatch(listCategoryLostHover())}
                                 onClick={() => dispatch(listCategoryHidden())}
                            >
                                <ListCategoriesContainer />
                            </div>
                        )
                    }
                }
            </Transition>
            <li>
                <Link to="/delivery">DELIVERY</Link>
            </li>
            <li>
                <Link to="/blog">BLOG</Link>
            </li>
            <li>
                <Link to="/contact">CONTACTS</Link>
            </li>
        </ul>
    )
};

export default MainMenu;