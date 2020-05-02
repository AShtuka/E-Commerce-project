import React from "react";
import './list-categories.css';
import {Link} from "react-router-dom";

const categories = [
    {categoryTitle: 'Nerf Elite', categoryItemsAmount: 37, id: 1},
    {categoryTitle: 'Nerf Modulus', categoryItemsAmount: 12, id: 2},
    {categoryTitle: 'Nerf Mega', categoryItemsAmount: 9, id: 3},
    {categoryTitle: 'Nerf Zombie Strike', categoryItemsAmount: 15, id: 4},
    {categoryTitle: 'Nerf Fortnite', categoryItemsAmount: 14, id: 5},
    {categoryTitle: 'Nerf Alpha Strike', categoryItemsAmount: 10, id: 6},
    {categoryTitle: 'Nerf Super Soaker', categoryItemsAmount: 7, id: 7},
    {categoryTitle: 'Nerf Rival', categoryItemsAmount: 27, id: 8},
    {categoryTitle: 'Nerf Laser Ops', categoryItemsAmount: 2, id: 9},
    {categoryTitle: 'Nerf Doomlands 2169', categoryItemsAmount: 5, id: 10},
    {categoryTitle: 'Nerf Nitro', categoryItemsAmount: 15, id: 11},
    {categoryTitle: 'Accessories', categoryItemsAmount: 27, id: 12},
    {categoryTitle: 'Arrows', categoryItemsAmount: 16, id: 13},
    ];

const ListCategories = () => {
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