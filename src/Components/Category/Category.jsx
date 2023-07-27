import React from 'react'
import './Category.css'
import ProductCard from '../ProductCard/ProductCard'

const Category = () => {
  return (
    <div className='category-container'>

      <div className='category-container-div'>
        <div className='category-container-heading'>
          Running Shoes
        </div>
      </div>

      <div className='category-product-list'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <ProductCard />
        ))}
      </div>

    </div>
  )
}

export default Category