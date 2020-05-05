import React from "react";
import {useDispatch} from "react-redux";
import {shopItemLoseHover, shopItemHover} from "../../store/actions/shop-item";
import EvaluativeBlock from "./evaluative-block";
import Img from "./img";
import InfoBlock from "./info-block";

import './item.css'

const Item = ({item}) => {

    const {imgUrl, id} = item;
    const dispatch = useDispatch();

    return (
            <div className="item-container">
                <div className="card hoverable"
                     onMouseOver={() => dispatch(shopItemHover(id))}
                     onMouseLeave={() => dispatch(shopItemLoseHover())}
                >
                    <Img imgUrl={imgUrl} id={id}/>
                    <div className="card-content">
                        <EvaluativeBlock />
                        <InfoBlock item={item}/>
                    </div>
                </div>
            </div>
            )
};

export default Item;