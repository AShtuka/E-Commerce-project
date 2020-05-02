import React, {Fragment} from "react";
import './mobile-menu.css';
import ListCategories from "../../list-categories";
import {useDispatch, useSelector} from "react-redux";
import {listCategoryOpen, mobileMenuOpen} from "../../../store/actions/shop-header";

const MobileMenu = () => {

    const isCategoriesOpen = useSelector(state => state.shopHeaderMobileMenu.isCategoriesOpen);
    const isMenuOpen = useSelector(state => state.shopHeaderMobileMenu.isMenuOpen);
    const dispatch = useDispatch();
    const btnName = isCategoriesOpen ? 'remove' : 'add';
    const hiddenCategories = isCategoriesOpen ? '' : 'hidden';
    const hiddenMenu = isMenuOpen ? 'mobile-menu-container' : 'hidden';

    const clickHandler = () => {
        dispatch(listCategoryOpen());
        dispatch(mobileMenuOpen())
    };

    return (
        <Fragment>
            <ul className="left menu-btn">
                <li>
                    <div className='mobile-menu-icon'>
                        <span className="material-icons vertical-alight"
                              onClick={() => dispatch(mobileMenuOpen())}>
                            menu
                        </span>
                    </div>
                </li>
            </ul>
            <div className={hiddenMenu}>
                <div className='mobile-menu'>
                    <div className='mobile-menu-btn-container'>
                        <div className="mobile-menu-btn">
                            <span className="material-icons mobile-menu-btn-icon">favorite</span>
                            WISH LIST
                        </div>
                        <div className="mobile-menu-btn">
                            <span className="material-icons mobile-menu-btn-icon">account_circle</span>
                            LOG IN
                        </div>
                    </div>
                    <div className='mobile-menu-list-container'>
                        <div>
                            CATALOG
                            <span className="material-icons mobile-menu-btn-icon right"
                                  onClick={() => dispatch(listCategoryOpen())}>
                                {btnName}
                            </span>
                            <span className={hiddenCategories}
                                  onClick={clickHandler}>
                                <ListCategories />
                            </span>
                        </div>
                        <div>DELIVERY</div>
                        <div>BLOG</div>
                        <div>CONTACTS</div>
                    </div>
                </div>
                <div className='empty-block' onClick={() => dispatch(mobileMenuOpen())}></div>
            </div>
        </Fragment>
    )
};

export default MobileMenu;