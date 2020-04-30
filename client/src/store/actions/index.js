import DBService from "../../services/db-service";

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

const fetchGoods = (dispatch) => {
    dispatch(goodsRequested());
    new DBService().getData()
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

const listCategoryShow = () => {
    return {
        type: 'LIST_CATEGORY_SHOW'
    }
};

const listCategoryLostHover = () => {
    return {
        type: 'LIST_CATEGORY_LOST_HOVER'
    }
};

const listCategoryHidden = () => {
    return {
        type: 'LIST_CATEGORY_HIDDEN'
    }
};

export {
    fetchGoods,
    itemAddedToCart,
    itemRemovedFromCart,
    allItemsRemovedFromCart,
    listCategoryHidden,
    listCategoryShow,
    listCategoryLostHover
};