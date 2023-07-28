import React, { useContext } from 'react';
import { Context } from '../../Context/MyContext';
import Banner from './Banner/Banner';
import ProductCard from '../ProductCard/ProductCard';
import './Home.css';

const Home = () => {

  const { gotProducts } = useContext(Context);

  return (
    <div>
      <Banner />
      {/* heading and paragaph start */}
      <div className='heading'>
        <div className='heading-paragraph-title'>  Cushioning for Your Miles </div>
        <div className='heading-paragraph'>  A lightweight Nike ZoomX midsole is combined with
          increased stack heights to help provide cushioning
          during extended stretches of running. </div>
      </div>
      {/* heading and paragaph here */}
      <div className='product-list'>
        {gotProducts?.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>

    </div>
  )
}

export default Home