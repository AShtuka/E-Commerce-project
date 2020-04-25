const goodsLoaded = (newGoods) => {
    return {
        type: 'GOODS_LOADED',
        payload: newGoods
    };
};

const goodsRequested = () => {
    return { type: 'GOODS_REQUESTED'}
};

const goodsError = (error) => {
    return {
        type: 'GOODS_ERROR',
        payload: error
    }
};
export {
    goodsLoaded,
    goodsRequested,
    goodsError
};