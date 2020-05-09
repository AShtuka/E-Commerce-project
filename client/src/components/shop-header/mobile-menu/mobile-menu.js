import React, {Fragment} from "react";
import './mobile-menu.css';
import ListCategories from "../../list-category";
import {useDispatch, useSelector} from "react-redux";
import {listCategoryOpen, mobileMenuOpen, personalCabinetMenuOpen} from "../../../store/actions/shop-header";
import Transition from "react-transition-group/Transition";
import {loginFormOpen} from "../../../store/actions/login";
import {Link} from "react-router-dom";
import PersonalCabinetMenu from "../../personal-cabinet/menu";

const MobileMenu = () => {

    const isCategoriesOpen = useSelector(state => state.shopHeaderMobileMenu.isCategoriesOpen);
    const isMenuOpen = useSelector(state => state.shopHeaderMobileMenu.isMenuOpen);
    const isPersonalCabinetMenuOpen = useSelector(state => state.shopHeaderMobileMenu.isPersonalCabinetMenuOpen);
    const dispatch = useDispatch();
    const categoryBtnName = isCategoriesOpen ? 'remove' : 'add';
    const personalCabinetBtnName = isPersonalCabinetMenuOpen ? 'remove' : 'add';
    const hiddenCategories = isCategoriesOpen ? '' : 'hidden';
    const hiddenPersonalCabinetMenu = isPersonalCabinetMenuOpen ? '' : 'hidden';

    const clickHandler = () => {
        dispatch(listCategoryOpen());
        dispatch(mobileMenuOpen())
    };

    const loginClickHandler = () => {
        dispatch(mobileMenuOpen());
        dispatch(loginFormOpen());
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
            <Transition in={isMenuOpen} timeout={0}>
                {
                    (state) => {
                        return (
                            <div className={`mobile-menu-container ${state}`}>
                                <div className='mobile-menu'>
                                    <div className='mobile-menu-btn-container'>
                                        <div className="mobile-menu-btn">
                                            <span className="material-icons mobile-menu-btn-icon">favorite</span>
                                            WISH LIST
                                        </div>
                                        <div className="mobile-menu-btn" onClick={loginClickHandler}>
                                            <span className="material-icons mobile-menu-btn-icon">account_circle</span>
                                            LOG IN
                                        </div>
                                    </div>
                                    <div className='mobile-menu-list-container'>
                                        <div>
                                            CATALOG
                                            <span className="material-icons mobile-menu-btn-icon right"
                                                  onClick={() => dispatch(listCategoryOpen())}>
                                                    {categoryBtnName}
                                            </span>
                                            <span className={hiddenCategories}
                                                  onClick={clickHandler}>
                                                    <ListCategories />
                                            </span>
                                        </div>
                                        <div>DELIVERY</div>
                                        <div>BLOG</div>
                                        <div>CONTACTS</div>
                                        <div>
                                            <Link to="/personal-cabinet">
                                                <span className='cabinet'>PERSONAL CABINET</span>
                                            </Link>
                                            <span className="material-icons mobile-menu-btn-icon right"
                                                  onClick={() => dispatch(personalCabinetMenuOpen())}>
                                                    {personalCabinetBtnName}
                                            </span>
                                            <span className={hiddenPersonalCabinetMenu}>
                                                <PersonalCabinetMenu />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='empty-block' onClick={() => dispatch(mobileMenuOpen())}></div>
                            </div>
                        )
                    }
                }
            </Transition>
        </Fragment>
    )
};

export default MobileMenu;