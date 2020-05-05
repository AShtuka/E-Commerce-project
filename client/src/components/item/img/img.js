import React from "react";
import {useSelector} from "react-redux";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './img.css'


const Img =({imgUrl, id}) => {

    const itemId = useSelector(state => state.shopItem.itemId);
    const img = (id === itemId) ? imgUrl[1] : imgUrl[0];

    return (
            <SwitchTransition>
                <CSSTransition
                    key={img}
                    // addEndListener={(node, done) => {
                    //     node.addEventListener("transitionend", done, false);
                    // }}
                    timeout={200}
                    classNames="fade"
                >
                    <div className="card-image">
                        <img src={img} alt='NOT FOUND' />
                    </div>
                </CSSTransition>
            </SwitchTransition>
    )
};

export default Img;