import ItemsListApi from "../../services/items-list-api";

const productLoaded = (newProduct) => {
    return {
        type: 'FETCH_PRODUCT_SUCCESS',
        payload: newProduct
    };
};

const productRequested = () => {
    return { type: 'FETCH_PRODUCT_REQUEST'}
};

const productError = (error) => {
    return {
        type: 'FETCH_PRODUCT_FAILURE',
        payload: error
    }
};

const fetchProduct = (dispatch) => {
    dispatch(productRequested());
    new ItemsListApi().getItemsList()
        .then((data) => dispatch(productLoaded(data)))
        .catch((error) => dispatch(productError(error)));
};

export {
    fetchProduct,
};