import {combineReducers} from "redux";

import shoppingCart from "./shopping-cart";
import goodsList from "./goods-list";
import shopHeaderMainMenu from "./shop-header-main-menu";
import shopHeaderMobileMenu from './shop-header-mobile-menu'

const reducer = combineReducers({
        shoppingCart,
        goodsList,
        shopHeaderMainMenu,
        shopHeaderMobileMenu,
    });

export default reducer;