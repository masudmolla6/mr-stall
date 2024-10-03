import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
  // console.log(item);
    return (
      <div className="card bg-base-100 w-96 md:w-full lg:full shadow-xl">
        <figure>
          <img src={item.Picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">{item.Item}</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              <Link to={`/products/${item._id}`}>Details</Link>
            </div>
            <div className="badge badge-outline">
              <Link>
                Add To Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;