import React from 'react';
import {BrowserRouter as AppRouter, Route, Routes } from 'react-router-dom'; 
import Cart from './Components/Front/Cart/Cart';
import Header from './Components/Front/Header';
import Signup from './Components/Front/Signup/Signup';
import Product from './Components/Products/Product';

const Router = ({productItems, cartItems, handleAddProduct, handleRemoveProduct,  handleCartClearance}) => {
    return (
        <AppRouter>
            <Header cartItems={cartItems}/>
            <Routes>
                  <Route path='/' element={<Product productItems={productItems} handleAddProduct={handleAddProduct}/>} />
                  <Route path='/sign Up' element={<Signup/>} />
                  <Route path='/cart' element={<Cart cartItems={cartItems} 
                  handleAddProduct={handleAddProduct} 
                  handleRemoveProduct={handleRemoveProduct}
                  handleCartClearance={ handleCartClearance}/> } />
                   
            </Routes>
            </AppRouter>
    );
}

export default Router;
