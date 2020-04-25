const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0){
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    } else {
        return [
            ...cartItems.slice(0, idx),
            item,
            ...cartItems.slice(idx + 1)
        ];
    }
};

const updateCartItem = (item, cartItem = {}, quantity) => {

    const { id = item.id,
        count = 0,
        title = item.title,
        price = item.price,
        imgUrl = item.imgUrl,
        total = 0} = cartItem;

    return {id, title, price, imgUrl,
        count: count + quantity,
        total: total + item.price * quantity
    }

};

const updateOrder = (state, itemId, quantity) => {
    const {goodsList: {goods} , shoppingCart: {cartItems, cartItemsAmount, orderTotal}} = state;
    const item = goods.find(({id}) => id === itemId);
    const cartItemIndex = cartItems.findIndex(({id}) => id === itemId);
    const cartItem = cartItems[cartItemIndex];

    const newItem = updateCartItem(item, cartItem, quantity);

    return {cartItems: updateCartItems(cartItems, newItem, cartItemIndex),
        cartItemsAmount: cartItemsAmount + quantity,
        orderTotal: orderTotal + newItem.price * quantity};
};

const updateShoppingCart = (state, action) => {

    if (state === undefined) {
        return {
            cartItems: [],
            cartItemsAmount: 0,
            orderTotal: 0
        };
    }

    switch (action.type) {
        case 'ITEM_ADDED_TO_CART' :
            return updateOrder(state, action.payload, 1);

        case 'ITEM_REMOVED_FROM_CART' :
            return updateOrder(state, action.payload, -1);

        case 'ALL_ITEMS_REMOVED_FROM_CART' :
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);

        default: return state.shoppingCart;
    }
};

export default updateShoppingCart;
