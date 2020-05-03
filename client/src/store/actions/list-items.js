import ItemsListApi from "../../services/items-list-api";

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
    new ItemsListApi().getItemsList()
        .then((data) => dispatch(goodsLoaded(data)))
        .catch((error) => dispatch(goodsError(error)));
};

export {
    fetchGoods,
};