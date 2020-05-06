import React from "react";
import {useDispatch} from "react-redux";
import {productLoseHover, productHover} from "../../store/actions/product";
import EvaluativeBlock from "./evaluative-block";
import Img from "./img";
import InfoBlock from "./info-block";

import './item.css'

const Item = ({product}) => {

    const {imgUrl, id} = product;
    const dispatch = useDispatch();

    return (
            <div className="item-container">
                <div className="card hoverable"
                     onMouseOver={() => dispatch(productHover(id))}
                     onMouseLeave={() => dispatch(productLoseHover())}
                >
                    <Img imgUrl={imgUrl} id={id}/>
                    <div className="card-content">
                        <EvaluativeBlock />
                        <InfoBlock product={product}/>
                    </div>
                </div>
            </div>
            )
};

export default Item;