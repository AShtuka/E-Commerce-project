const initialState = {
    goods: [],
    loading: true,
    error: null,
};

const GoodsList = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_GOODS_REQUEST' :
            return {
                goods: [],
                loading: true,
                error: null
            };

        case 'FETCH_GOODS_SUCCESS' :
            return {
                goods: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_GOODS_FAILURE' :
            return {
                goods: [],
                loading: false,
                error: action.payload
            };

        default: return state;
    }
};

export default GoodsList;