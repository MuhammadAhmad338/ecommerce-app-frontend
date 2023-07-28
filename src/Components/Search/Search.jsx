import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/MyContext';
import './Search.css';

const Search = () => {

    const { search, searchProduct } = useContext(Context);
    const navigate = useNavigate();

    const searchProducts = (e) => {
        e.preventDefault();
        const query = e.target.value;
        searchProduct(query);
    }

    return (
        <div className='search'>
            <div className='search-input'>
                <input className='inputIT' type="text" placeholder='Search Here' onChange={searchProducts} />
            </div>
            {search.map((item) => (
                <div key={item._id} className='search-dropdown' onClick={() => navigate(`/productDetails/${item._id}`)}>
                    <div className='search-item'>
                        {item.title}
                    </div>
                    <div className='searchItem-img'>
                        <img src={item.thumbnail} alt="sea" height={50} width={50} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Search;