import React, { useContext } from 'react';
import { useState } from 'react';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useNavigate } from 'react-router';
import { Context } from '../../Context/MyContext';
import prod from '../../assets/adidas.png';
import './Header.css';

const Header = () => {

    const navigate = useNavigate();
    const { cartItems, categoryProduct } = useContext(Context);

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
                            <span onClick={() => categoryProduct({name: "Shoe"})}>Shoe</span>
                            <span onClick={() => categoryProduct({name: "Men's Shoes"})}>Men's Shoes</span>
                            <span onClick={() => categoryProduct({name: "Men's Basketball Shoes"})}>Men's Basketball Shoes</span>
                        </div>
                    </div>
                    <span onClick={() => navigate("/contact")}>Contact</span>
                </div>
                <div className='header-cart'>
                    <BiSearchAlt onClick={() => navigate('/search')} />
                    <MdOutlineFavoriteBorder />
                    <AiOutlineShoppingCart className='cart-icon' onClick={() => navigate('/cart')} />
                    {!!cartItems.length && <div class="cart-count-container">
                        <span class="cart-count">{cartItems.length}</span>
                    </div>}
                </div>
            </div>
        </>
    );
}

export default Header