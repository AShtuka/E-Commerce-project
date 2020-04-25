import updateShoppingCart from "./update-shopping-cart";
import updateGoodsList from "./updateGoodsList";

const reducer = (state, action) => {
    return {
        goodsList: updateGoodsList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
};

export default reducer;