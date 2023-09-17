import React from 'react';
import './style.scss';
import technology from '../../assets/icons/monitorar-tablet-e-smartohone 1.svg';
import marketplace from '../../assets/icons/supermercados 1.svg'
import drinks from '../../assets/icons/whiskey.svg';
import tools from '../../assets/icons/ferramentas 1.svg';
import health from '../../assets/icons/cuidados-de-saude 1.svg';
import sports from '../../assets/icons/corrida 1.svg';
import fashion from '../../assets/icons/moda 1.svg';



const Categories = () => {
    return (
        <nav className="container-categories">
            <ul>
                <li id="active"><a href="#" ><img src={technology}></img></a><p>Tecnologia</p></li>
                <li><a href="#"><img src={marketplace}></img></a><p>Supermercado</p></li>
                <li><a href="#"><img src={drinks}></img></a><p>Bebidas</p></li>
                <li><a href="#"><img src={tools}></img></a><p>Ferramentas</p></li>
                <li><a href="#"><img src={health}></img></a><p>Saúde</p></li>
                <li><a href="#"><img src={sports}></img></a><p>Esportes e Fitness</p></li>
                <li><a href="#"><img src={fashion}></img></a><p>Moda</p></li>
                
            </ul>
        </nav>
    )
}

export default Categories;