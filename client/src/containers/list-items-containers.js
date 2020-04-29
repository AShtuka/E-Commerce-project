import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {fetchGoods} from "../store/actions";

import ListItems from '../components/list-items'
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";
import ErrorBoundary from "../components/error-boundary";

const ListItemContainer = () => {

    const dispatch = useDispatch();
    const {loading, error} = useSelector(state => state.goodsList);

    useEffect(() => {
       fetchGoods(dispatch);
    }, [dispatch]);

    const errorMassage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <ListItems /> : null;

    return (
        <ErrorBoundary>
            {errorMassage}
            {spinner}
            {content}
        </ErrorBoundary>
    );
};

export default ListItemContainer;