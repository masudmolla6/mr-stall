import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductTab = ({items}) => {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 px-5 py-5 justify-center items-center">
        {items.map((item) => (
          <ProductCard key={item._id} item={item}></ProductCard>
        ))}
      </div>
    );
};

export default ProductTab;