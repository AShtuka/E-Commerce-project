import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './app.css';

import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import ProductPage from "../pages/product-page";

const App = () => {
    return (
        <Switch>
            <Route  path = '/'
                    component = {HomePage}
                    exact />

            <Route  path='/cart'
                    component = {CartPage}/>

            <Route  path='/shopping-page'
                    component = {ProductPage}/>
        </Switch>
    )
};

export default App;
