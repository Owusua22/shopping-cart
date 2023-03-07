import React from 'react';
import "./Cart.css"

import { Col, Row } from 'react-bootstrap';


const Cart = ({cartItems, handleAddProduct, handleRemoveProduct,  handleCartClearance}) => {
    const totalPrice = cartItems.reduce((price , item) => price + item.quantity * item.price, 0)
   
return (
        <div className='cart-items'>
            <div className='cartHeader'>
                <h1 style={{marginTop:"10px"}}>
                    Cart Items
                </h1>
                </div>
                <div className='clear'>
                    {cartItems.length >= 1 && (
                        <button className='button-clear' onClick={handleCartClearance}>Clear Cart</button>
                    )}
                </div>
                <Row>
                    <Col md = {3}>
                {cartItems.length === 0 &&(
                     <div className='cartEmpty'>Aww, your cart is empty!!!! </div>)}
            

            <div>
                 
                {cartItems.map((item)=>(
                <div key={item.id} className="cartlist">
                    <img className='cartImage' src={item.image} alt={ item.name}/>
                    <div className='cartName'>
                        {item.name}
                        </div>
                        <div className="cartprice">Ghc {item.price}.00</div>
                        <div className="cartfunction">
                            <button className="cart-add" onClick={() => handleAddProduct(item)}>
                            +
                            </button>
                            <button >{item.quantity} </button>
                            <button className="min" onClick={() => handleRemoveProduct(item)}>
                                -
                            </button>
                        </div>
                        
                </div>
                ))}

            </div>
            </Col>
            </Row>
            <div className='cartPrice-name'>
                <div className="bill"> Total Bill:</div>   
                    <div className="cartprice" style={{fontSize:"25px", fontWeight:"900"}}>
                        Ghc {totalPrice}.00

                    </div>
                    <button className='check'>Check out</button>
            </div>
 </div>
        
    );
}

export default Cart;
