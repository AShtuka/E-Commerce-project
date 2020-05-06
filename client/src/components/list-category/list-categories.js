import React from "react";
import './list-categories.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ListCategories = () => {

    const categories = useSelector(state => state.categoriesList.categories);

 return (
     <div className="collection">
         {categories.map(item => <CategoryItem category={item} key={item.id}/>)}
     </div>
 )
};

const CategoryItem = ({category : {categoryTitle, categoryItemsAmount}}) => {

    return  <Link to="/shopping-page" className="collection-item">
                <span className="material-icons category-arrow">arrow_right</span>
                {categoryTitle} ({categoryItemsAmount})
            </Link>
};

export default ListCategories;