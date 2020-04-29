const initialState = {
    cartItems: [],
    cartItemsAmount: 0,
    orderTotal: 0
};

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

const updateOrder = (state, item, quantity) => {
    const {cartItems, cartItemsAmount, orderTotal} = state;
    const cartItemIndex = cartItems.findIndex(({id}) => id === item.id);
    const cartItem = cartItems[cartItemIndex];

    const newItem = updateCartItem(item, cartItem, quantity);

    return {cartItems: updateCartItems(cartItems, newItem, cartItemIndex),
        cartItemsAmount: cartItemsAmount + quantity,
        orderTotal: orderTotal + newItem.price * quantity};
};

const shoppingCart = (state = initialState, action) => {

    const item = action.payload;

    switch (action.type) {
        case 'ITEM_ADDED_TO_CART' :
            return updateOrder(state, item , 1);

        case 'ITEM_REMOVED_FROM_CART' :
            return updateOrder(state, item , -1);

        case 'ALL_ITEMS_REMOVED_FROM_CART' :
            const cartItem = state.cartItems.find(({id}) => id === item.id);
            return updateOrder(state, item , -cartItem.count);

        default: return state;
    }
};

export default shoppingCart;
