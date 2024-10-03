import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const cardData = useLoaderData();
    console.log(cardData);
    return (
        <div>
            
        </div>
    );
};

export default ProductDetails;