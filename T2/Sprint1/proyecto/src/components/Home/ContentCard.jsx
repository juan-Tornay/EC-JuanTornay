import React from 'react';
import '../styles/content.css';

const ContentCard = ({ product }) => {
  return (
    <div className="content-card">
      <img src={product.image} alt={product.name} className="content-card-image" />
      <h2 className="content-card-title">{product.name}</h2>
      {product.price && <p className="content-card-price">{product.price}</p>}
    </div>
  );
};

export default ContentCard;