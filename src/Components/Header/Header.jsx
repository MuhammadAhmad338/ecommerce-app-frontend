import React from 'react';
import { useState } from 'react';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useNavigate } from 'react-router';
import prod from '../../assets/adidas.png';
import './Header.css';

const Header = () => {

    const navigate = useNavigate();
    const [categoryDropDown, setcategoryDropDown] = useState(false);

    return (
        <>
            <div className='header'>
                <div className='header-icon'>
                    <img src={prod} alt="header-image" onClick={() => navigate("/")} />
                </div>
                <div className='header-title'>
                    <span onClick={() => navigate("/")}>Home</span>
                    <span onClick={() => navigate("/about")}>About</span>
                    <div className="has-dropdown">
                        <span className="category-title">Category</span>
                        <div className="dropdown-menu">
                            <span><a href="#shoes">Shoes</a></span>
                            <span><a href="#mens-shoes">Men's Shoes</a></span>
                            <span><a href="#mens-basketball-shoes">Men's Basketball Shoes</a></span>
                        </div>
                    </div>
                    <span onClick={() => navigate("/contact")}>Contact</span>
                </div>
                <div className='header-cart'>
                    <BiSearchAlt onClick={() => navigate('/search')} />
                    <MdOutlineFavoriteBorder />
                    <AiOutlineShoppingCart onClick={() => navigate('/cart')} />
                </div>
            </div>

        </>
    );
}

export default Header