import React from 'react';
import './style.scss';
import vtex from '../../../assets/icons/vtex.svg';
import searchBtn from '../../../assets/icons/search.svg';
import groupBtn from '../../../assets/icons/Group.svg';
import heart from '../../../assets/icons/Heart.svg';
import user from '../../../assets/icons/UserCircle.svg';
import cart from '../../../assets/icons/ShoppingCart.svg';

const Search = () => {
    return (
        <div className='container-search'>
            <img src={vtex} alt="Marca vtex" className="brand"></img>
            <div className='container-search-btn'>
                <input className="search-input" placeholder="O que você está buscando?"></input>
                <button className="search-btn"><img src={searchBtn}></img></button>
            </div>
            <div className="container-options">
                <button className="options-btn"><img src={groupBtn}></img></button>
                <button className="options-btn"><img src={heart}></img></button>
                <button className="options-btn"><img src={user}></img></button>
                <button className="options-btn"><img src={cart}></img></button>
            </div>
        </div>

    )
}

export default Search;