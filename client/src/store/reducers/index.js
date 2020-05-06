import {combineReducers} from "redux";

import shoppingCart from "./shopping-cart";
import listProduct from "./list-product";
import categoriesList from "./list-category";
import shopHeaderMainMenu from "./shop-header-main-menu";
import shopHeaderMobileMenu from './shop-header-mobile-menu';
import product from './product';

const reducer = combineReducers({
        shoppingCart,
        listProduct,
        shopHeaderMainMenu,
        shopHeaderMobileMenu,
        product,
        categoriesList
    });

export default reducer;