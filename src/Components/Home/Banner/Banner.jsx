import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/shoes/slide-1.png';
import banner2 from '../../../assets/shoes/slide-2.png';
import banner3 from '../../../assets/shoes/slide-3.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css';

const Banner = () => {
    return (
        <div className='container'>
            <Carousel axis='horizontal' autoPlay
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false} >
                <div>
                    <img src={banner1} alt='' className='image' />
                    <div className='banner-button'>Shop Now</div>
                </div>
                <div>
                    <img src={banner2} alt='' className='image' />
                    <div className='banner-button'>Shop Now</div>
                </div>
                <div>
                    <img src={banner3} alt='' className='image' />
                    <div className='banner-button'>Shop Now</div>
                </div>
            </Carousel>
        </div>
    )
}

export default Banner