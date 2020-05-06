const initialState = {
    products: [],
    loading: true,
    error: null,
};

const ListProduct = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_PRODUCT_REQUEST' :
            return {
                products: [],
                loading: true,
                error: null
            };

        case 'FETCH_PRODUCT_SUCCESS' :
            return {
                products: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_PRODUCT_FAILURE' :
            return {
                products: [],
                loading: false,
                error: action.payload
            };

        default: return state;
    }
};

export default ListProduct;