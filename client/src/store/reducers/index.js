import {combineReducers} from "redux";

import shoppingCart from "./shopping-cart";
import goodsList from "./goods-list";
import categoriesList from "./categories-list";
import shopHeaderMainMenu from "./shop-header-main-menu";
import shopHeaderMobileMenu from './shop-header-mobile-menu';
import shopItem from './shop-item';

const reducer = combineReducers({
        shoppingCart,
        goodsList,
        shopHeaderMainMenu,
        shopHeaderMobileMenu,
        shopItem,
        categoriesList
    });

export default reducer;