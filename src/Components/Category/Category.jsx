import React, { useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Context } from '../../Context/MyContext';
import { useParams } from 'react-router-dom';
import './Category.css';

const Category = () => {

  const { categoryProducts } = useContext(Context);
  const { id } = useParams();

  return (
    <div className='category-container'>
      <div className='category-container-div'>
        <div className='category-container-heading'>
          {id}
        </div>
      </div>
      <div className='category-product-list'>
        {categoryProducts.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Category;