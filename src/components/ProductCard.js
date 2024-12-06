import React from 'react';

const ProductCard = ({ name, image, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
    </div>
  );
};

export default ProductCard;
