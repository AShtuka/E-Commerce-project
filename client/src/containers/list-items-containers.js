import React, {Component} from "react";
import {connect} from 'react-redux';

import {withDBService} from "../components/hoc";
import {fetchGoods, itemAddedToCart} from "../actions";
import {compose} from "../utils";

import ListItems from '../components/list-items'
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";



class ListItemContainer extends Component {

    componentDidMount() {
        this.props.fetchGoods();
    };

    render() {
        const {items, loading, error, onAddedToCart} = this.props;

        if (loading) {return <Spinner />}

        if (error) {return <ErrorIndicator />}

        return <ListItems items={items}
                          onAddedToCart={onAddedToCart}/>
    }
};

const mapStateToProps = ({goodsList: {goods, loading, error}}) => {
    return {
        items: goods,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch, {dbService}) => {
    return {
        fetchGoods: fetchGoods(dbService, dispatch),
        onAddedToCart: (id) => dispatch(itemAddedToCart(id))
    }
};

export default compose(
    withDBService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ListItemContainer);