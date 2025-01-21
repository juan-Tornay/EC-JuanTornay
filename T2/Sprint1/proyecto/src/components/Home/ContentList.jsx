import React from 'react';
import ContentCard from './ContentCard';


const ContentList = ({ products }) => {
  return (
    <section className="content-list">
      {products.map(product => (
        <ContentCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ContentList;