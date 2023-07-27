import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {

    const navigate = useNavigate();

    return (
        <div key={product._id} className='product-card' onClick={() => navigate(`/productDetails/${product._id}`)}>
            <div className='product-card-image'>
              <img src={product.thumbnail} alt='thumbnail'/>
            </div>
            <div className='product-card-details'>
                <h2 className='product-card-name'>{product.title}</h2>
                <div className='product-card-price'>
                    <p>$ {product.price}</p>
                    <p className='product-card-discount'> 25.00 % </p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;