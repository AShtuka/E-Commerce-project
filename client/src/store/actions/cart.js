const itemRemovedFromCart = (itemId) => {
    return {
        type: 'ITEM_REMOVED_FROM_CART',
        payload: itemId
    }
};

const allItemsRemovedFromCart = (itemId) => {
    return {
        type: 'ALL_ITEMS_REMOVED_FROM_CART',
        payload: itemId
    }
};

const itemAddedToCart = (itemId) => {
    return {
        type: 'ITEM_ADDED_TO_CART',
        payload: itemId
    }
};

export {
    itemAddedToCart,
    itemRemovedFromCart,
    allItemsRemovedFromCart,
};