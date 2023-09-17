import React from 'react';
import './style.scss';
import vtex from '../../assets/icons/vtex.svg';
import next from '../../assets/icons/next.svg';

const Brands = () => {
    return (
        <section className="container-brands">
            <h3 className="title-brands">Navegue por marcas</h3>
            <span className="postion-btn">
                <div className="brands">
                    
                        <a className="item-brand" href="#"><img src={vtex}></img></a>
                        <a className="item-brand" href="#"><img src={vtex}></img></a>
                        <a className="item-brand" href="#"><img src={vtex}></img></a>
                        <a className="item-brand" href="#"><img src={vtex}></img></a>
                        <a className="item-brand" href="#"><img src={vtex}></img></a>
                        <a className="next-btn" href="#"><img src={next}></img></a>
                </div>
                
            </span>
        </section>
    )
}

export default Brands;