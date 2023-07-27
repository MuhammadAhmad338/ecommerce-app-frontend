import React from 'react';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import prod from '../../assets/adidas.png';
import { useNavigate } from 'react-router';
import './Header.css';

const Header = () => {
    
    const navigate = useNavigate();

    return (
        <div className='header'>
            <div className='header-icon'>
                <img src={prod} alt="header-image" onClick={() => navigate("/")} />
            </div>
            <div className='header-title'>
                <span onClick={() => navigate("/")}>Home</span>
                <span onClick={() => navigate("/about")}>About</span>
                <span onClick={() => navigate("/category")}>Category</span>
                <select name="" id="">
                    <option value="1"></option>
                </select>
                <span onClick={() => navigate("/contact")}>Contact</span>
            </div>
            <div className='header-cart'>
                <MdOutlineFavoriteBorder />
                <AiOutlineShoppingCart onClick={() => navigate('/cart')} />
            </div>
        </div>
    )
}

export default Header