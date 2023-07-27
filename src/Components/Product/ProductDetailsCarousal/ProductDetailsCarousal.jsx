import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ProductDetailsCarousal.css'

const ProductDetailsCarousal = ({ product }) => {
    return (
        <div className='product-details-carousel'>
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={true}
                thumbWidth={60}
                className='productCarousel'>
               {
                  product.images?.map((image) => <img src={image.secure_url} alt=''/> )
               }
            </Carousel>
        </div>
    );
}

export default ProductDetailsCarousal;