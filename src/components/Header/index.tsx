import React from 'react';
import shieldIcon from '../../assets/icons/ShieldCheck.svg';
import truckIcon from '../../assets/icons/Truck.svg';
import creditCardIcon from '../../assets/icons/CreditCard.svg';
import Search from './Search';
import Nav from './Nav';
import './style.scss';

const Header = () => {
    return (
        <header className="header">
            <div className='benefits'>
                <div className='benefits-item'>
                    <img src={shieldIcon}></img>
                    <p>Compra <span className='primaryColor'>100% segura</span></p>
                </div >
                <div className='benefits-item'> 
                    <img src={truckIcon}></img>
                    <p><span className='primaryColor'>Frete grátis </span>acima de R$ 200</p>
                </div>
                <div className='benefits-item'>
                    <img src={creditCardIcon}></img>
                    <p><span className='primaryColor'>Parcele</span> suas compras</p>
                </div>
            </div>
            <hr className="hr-header"></hr>
            <Search />
            <hr className="hr-header"></hr>
            <Nav />
        </header>
    )
}

export default Header;