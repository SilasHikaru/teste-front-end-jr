import React from 'react';
import './style.scss';

const ProductCategory = () => {
    return(
        <nav id="container-productCategory">
            <ul >
                <a href="#"><li id="active">CELULAR </li></a>
                <a href="#"><li>ACESSÓRIOS </li></a>
                <a href="#"><li>TABLETS </li></a>
                <a href="#"><li>NOTEBOOKS </li></a>
                <a href="#"><li>TVS </li></a>
                <a href="#"><li>VER TODOS </li></a>
                
            </ul>
        </nav>
    )
}

export default ProductCategory;