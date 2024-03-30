import React from 'react';
import '../index.css';


const Product = ({ id, name, price, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ id, name, price });
    
  };

  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
