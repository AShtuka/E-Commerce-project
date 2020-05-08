import React from "react";
import './page-container.css'

const PageContainer = (props) => {

    const {menu, content} = props;

    return (
        <div className='page-container'>
            <div className='page-menu'>
                {menu}
            </div>
            <div className='page-items'>
                {content}
            </div>
        </div>
    )
};

export default PageContainer;