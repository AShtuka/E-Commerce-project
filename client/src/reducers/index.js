const initialState = {
    goods: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'GOODS_REQUESTED' :
            return {
                goods: [],
                loading: true,
                error: null
            };

        case 'GOODS_LOADED' :
            return {
                goods: action.payload,
                loading: false,
                error: null
            };

        case 'GOODS_ERROR' :
            return {
                goods: [],
                loading: false,
                error: action.payload
            };

        default: return state;
    }

};

export default reducer;