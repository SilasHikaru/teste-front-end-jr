import React from 'react';
import './style.scss';

interface Iproduct {
    productName:string;
    descriptionShort:string;
    photo:string;
    price:number;
  }

interface Iproduct {
    productName:string;
    descriptionShort:string;
    photo:string;
    price:number;
    index: number;
    setBuy:React.Dispatch<React.SetStateAction< null|number>>
}



const Product = ({productName, descriptionShort, photo, price, setBuy, index}: Iproduct) => {
    return(
        <section className="card-product">  
            <div className="content-product">
                <img src={photo}></img>
                <p className="name-product">{productName}</p>
                <p className="oddPrice-product">R$ 30,90</p>
                <p className="priceOffer-product">R$ {price}</p>
                <p className="term-buy"> ou 2x de R$ 49,95 sem juros</p>
                <p className="freightage">Frete grátis</p>
                <button className="buy" onClick={() => setBuy(() => index) }>COMPRAR</button>
            </div>
        </section>
    )
}

export default Product;