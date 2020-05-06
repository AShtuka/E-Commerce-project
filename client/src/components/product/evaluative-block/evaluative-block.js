import React from "react";
import './evaluative-block.css'

const EvaluativeBlock = () => {
    return (
        <div className='evaluative-container'>
            <div className='stars'>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star_half</span>
                <span className="material-icons">star_outline</span>
            </div>
            <div>
                <span className="material-icons">favorite_outline</span>
            </div>
        </div>
    )
};

export default EvaluativeBlock;