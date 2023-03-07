import React from 'react';
import "./Products.css"

const Product = ({productItems, handleAddProduct}) => {
    return (
        <div className='products'>

            {productItems.map((productItems)=>(
                <div className='card'>
                    <div className='productImage'>
                    <img src={productItems.image} alt={productItems.name} className="productImage"/>
                    </div>
                    <div>
                        <h3 className='productName'>
                            {productItems.name}
                        </h3>
                    </div>
                    <div>
                        <h3 className='productPrice'>
                           Ghc {productItems.price}.00
                        </h3>
                    </div>
                    <div>
                        <button className='add' onClick={()=>handleAddProduct(productItems)}>Add to Cart</button>
                    </div>
                    </div>
            ))}
            
        
        </div>
    );
}

export default Product;
