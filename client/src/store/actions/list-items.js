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

export {
    fetchGoods,
};