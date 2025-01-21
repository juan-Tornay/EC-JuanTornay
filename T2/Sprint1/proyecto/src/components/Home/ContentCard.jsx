import React from 'react';


const ContentCard = ({ product }) => {
  return (
    <div className="content-card">
      <img src={product.image} alt={product.name} className="content-card-image" />
      <h2 className="content-card-title">{product.name}</h2>
      <p className="content-card-price">{product.price}</p>
    </div>
  );
};

export default ContentCard;