import React, {Component} from "react";
import {connect} from 'react-redux';

import Item from "../item";
import withDBService from "../hoc/with-db-service";
import {goodsLoaded} from "../../actions";
import {compose} from "../../utils";


import './list-items.css';

class ListItem extends Component {

    componentDidMount() {
        const {dbService} = this.props;
        const data = dbService.getData();
        this.props.goodsLoaded(data);
    };

    render() {
        const {items} = this.props;
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

const mapStateToProps = ({goods}) => {
    return { items: goods };
};

const mapDispatchToProps = {goodsLoaded};

export default compose(
    withDBService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ListItem);
