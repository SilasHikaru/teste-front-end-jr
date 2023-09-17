import React from 'react';
import './style.scss';
import crowIcon from '../../../assets/icons/CrownSimple.svg'; 

const Nav = () => {
    return (
        <nav className="container-nav">
            <ul id="ul-header">
                <li className="categorias"><a href="#">TODAS AS CATEGORIAS</a></li>
                <li className="categorias"><a href="#">SUPERMERCADO</a></li>
                <li className="categorias"><a href="#">LIVROS</a></li>
                <li className="categorias"><a href="#">MODA</a></li>
                <li className="categorias"><a href="#">LANÇAMENTOS</a></li>
                <li className="categorias"><a href="#" id="active">OFERTAS DO DIA</a></li>
                <li className="categorias"><a href="#" id="signature"><img src={crowIcon}></img> <div id="signature-div">ASSINATURA</div></a></li>

            </ul>
        </nav>
    )
}

export default Nav