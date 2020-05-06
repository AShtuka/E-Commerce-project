import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategories} from "../store/actions/list-category";

import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";
import ErrorBoundary from "../components/error-boundary";
import ListCategories from "../components/list-category";

const ListICategoriesContainer = () => {

    const dispatch = useDispatch();
    const {loading, error} = useSelector(state => state.categoriesList);

    useEffect(() => {
        fetchCategories(dispatch);
    }, [dispatch]);

    const errorMassage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <ListCategories /> : null;

    return (
        <ErrorBoundary>
            {errorMassage}
            {spinner}
            {content}
        </ErrorBoundary>
    );
};

export default ListICategoriesContainer;