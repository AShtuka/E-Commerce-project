import React, {Component} from "react";
import {connect} from 'react-redux';

import Item from "../item";
import withDBService from "../hoc/with-db-service";
import {goodsLoaded, goodsRequested, goodsError} from "../../actions";
import {compose} from "../../utils";


import './list-items.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class ListItem extends Component {

    componentDidMount() {
        const {dbService, goodsLoaded, goodsRequested, goodsError} = this.props;
        goodsRequested();
        dbService.getData()
            .then((data) => goodsLoaded(data))
            .catch((error) => goodsError(error));
    };

    render() {
        const {items, loading, error} = this.props;

        if (loading) {return <Spinner />}

        if (error) {return <ErrorIndicator />}

        return (
            <div className="row">
                {
                    items.map(item => {
                        return <Item key={item.id} item={item} />;
                    })
                }
            </div>
        )
    }
};

const mapStateToProps = ({goods, loading, error}) => {
    return {
        items: goods,
        loading,
        error
    };
};

const mapDispatchToProps = {goodsLoaded, goodsRequested, goodsError};

export default compose(
    withDBService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ListItem);
