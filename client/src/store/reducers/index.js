import {combineReducers} from "redux";

import shoppingCart from "./shopping-cart";
import goodsList from "./goods-list";

const reducer = combineReducers( {shoppingCart, goodsList});

export default reducer;