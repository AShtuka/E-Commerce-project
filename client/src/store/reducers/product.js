const initialState = {
    productId: null,
    isHover: false
};

const Product = (state = initialState, action) => {

    switch (action.type) {
        case 'PRODUCT_HOVER' :
            return {
                productId: action.payload,
                isHover: true
            };

        case 'PRODUCT_LOSE_HOVER' :
            return {
                isHover: false,
                productId: null
            };

        default: return state;
    }
};

export default Product;