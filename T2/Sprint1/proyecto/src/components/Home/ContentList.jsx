import React, { useEffect, useState } from 'react';
import ContentCard from './ContentCard';
import { fetchProducts } from '../services/content_API';

const ContentList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  return (
    <section className="content-list">
      {products.map(product => (
        <ContentCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ContentList;