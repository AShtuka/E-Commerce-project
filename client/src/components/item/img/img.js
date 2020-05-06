import React from "react";
import {useSelector} from "react-redux";
import Transition from "react-transition-group/Transition";
import './img.css'


const Img =({imgUrl, id}) => {

    const itemId = useSelector(state => state.shopItem.itemId);
    const img = (id === itemId) ? imgUrl[1] : imgUrl[0];

    return (
        <div className="card-image">
            <Transition in={(id === itemId)} timeout={200}>
                {
                    (state) =>  <img className={state} src={img} alt='NOT FOUND' />
                }
            </Transition>
        </div>
        )
};

export default Img;