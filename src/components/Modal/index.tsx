import React from 'react';
import './style.scss';
import close from '../../assets/icons/close.svg';
import plus from '../../assets/icons/plus.svg'
import less from '../../assets/icons/less.svg';

interface Imodal {
    productName:string;
    descriptionShort:string;
    photo:string;
    price:number;
    setActive:React.Dispatch<React.SetStateAction<boolean>>
}



const Modal = ({productName, descriptionShort, photo, price, setActive}: Imodal) => {
    return(
        <article className="container-model">  
            <div className="container-model-intern">

                <img className="photo" src={photo}></img>
                <div className="content-model">
                    <p className="name">{productName}</p>
                    <p className="price">R$ ${price}</p>
                    <p className="description">{descriptionShort}</p>   
                    <a href="#"className="details">Veja meis detalhes do produto</a>
                    <div className="container-amount">
                        <div className="container-amount-intern">
                            <a className="less-btn" href="#"><img className="less-btn-icon"src={less}></img></a>
                            <input id="amount"></input>
                            <a className="plus-btn"href="#"><img className="plus-btn-icon" src={plus}></img></a>
                        </div>
                    </div>
                    <button className="buy-item">COMPRAR</button>

                    <button className="close-model" onClick={() => setActive(false)}><img src={close}></img></button>
                </div>
                
               
            </div>
            
        </article>
    )
}

export default Modal;