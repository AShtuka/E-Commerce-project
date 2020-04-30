import {combineReducers} from "redux";

import shoppingCart from "./shopping-cart";
import goodsList from "./goods-list";
import shopHeaderMainMenu from "./shop-header-main-menu";

const reducer = combineReducers( {shoppingCart, goodsList, shopHeaderMainMenu});

export default reducer;