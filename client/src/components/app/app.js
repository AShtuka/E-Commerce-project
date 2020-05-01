import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './app.css';

import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import ShoppingPage from "../pages/shopping-page";


const App = () => {
    return (
        <Switch>
            <Route  path = '/'
                    component = {HomePage}
                    exact />

            <Route  path='/cart'
                    component = {CartPage}/>

            <Route  path='/shopping-page'
                    component = {ShoppingPage}/>
        </Switch>
    )
};


export default App;
