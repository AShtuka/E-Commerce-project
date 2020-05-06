import CategoriesListApi from "../../services/categories-list-api";

const categoriesLoaded = (newCategories) => {
    return {
        type: 'FETCH_CATEGORIES_SUCCESS',
        payload: newCategories
    };
};

const categoriesRequested = () => {
    return { type: 'FETCH_CATEGORIES_REQUEST'}
};

const categoriesError = (error) => {
    return {
        type: 'FETCH_CATEGORIES_FAILURE',
        payload: error
    }
};

const fetchCategories = (dispatch) => {
    dispatch(categoriesRequested());
    new CategoriesListApi().getCategoriesList()
        .then((data) => dispatch(categoriesLoaded(data)))
        .catch((error) => dispatch(categoriesError(error)));
};

export {
    fetchCategories,
};