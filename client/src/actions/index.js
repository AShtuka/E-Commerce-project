const goodsLoaded = (newGoods) => {
    return {
        type: 'FETCH_GOODS_SUCCESS',
        payload: newGoods
    };
};

const goodsRequested = () => {
    return { type: 'FETCH_GOODS_REQUEST'}
};

const goodsError = (error) => {
    return {
        type: 'FETCH_GOODS_FAILURE',
        payload: error
    }
};

const fetchGoods = (dbService, dispatch) => () => {
    dispatch(goodsRequested());
    dbService.getData()
        .then((data) => dispatch(goodsLoaded(data)))
        .catch((error) => dispatch(goodsError(error)));
};

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
    fetchGoods,
    itemAddedToCart,
    itemRemovedFromCart,
    allItemsRemovedFromCart
};