import {combineReducers} from "redux";

import shoppingCart from "./shopping-cart";
import listProduct from "./list-product";
import categoriesList from "./list-category";
import shopHeaderMainMenu from "./shop-header-main-menu";
import shopHeaderMobileMenu from './shop-header-mobile-menu';
import product from './product';
import loginForm from './login'

const reducer = combineReducers({
        shoppingCart,
        listProduct,
        shopHeaderMainMenu,
        shopHeaderMobileMenu,
        product,
        categoriesList,
        loginForm,
    });

export default reducer;