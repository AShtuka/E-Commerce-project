import React from "react";
import {useSelector} from "react-redux";
import Transition from "react-transition-group/Transition";
import './img.css'


const Img =({imgUrl, id}) => {

    const productId = useSelector(state => state.product.productId);
    const img = (id === productId) ? imgUrl[1] : imgUrl[0];

    return (
        <div className="card-image">
            <Transition in={(id === productId)} timeout={200}>
                {
                    (state) =>  <img className={state} src={img} alt='NOT FOUND' />
                }
            </Transition>
        </div>
        )
};

export default Img;