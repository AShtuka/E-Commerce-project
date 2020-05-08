import React from "react";
import './list-categories.css';
import {useSelector} from "react-redux";
import PageMenu from "../page-menu";

const ListCategories = () => {

    const categories = useSelector(state => state.categoriesList.categories);
    return <PageMenu listItem={categories}/>
};


export default ListCategories;