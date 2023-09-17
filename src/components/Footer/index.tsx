import React from 'react';
import facebookIcon from '../../assets/icons/023-facebook.svg';
import instagramIcon from '../../assets/icons/044-instagram.svg';
import youtubeIcon from '../../assets/icons/116-youtube.svg';
import visaIcon from '../../assets/icons/Group 1351.svg';
import eloIcon from '../../assets/icons/elo.svg';
import aleloIcon from '../../assets/icons/alelo.svg';
import dinnersIcon from '../../assets/icons/dinners.svg';
import ifoodIcon from '../../assets/icons/ifood.svg';
import mastercardIcon from '../../assets/icons/mastercard.svg';
import pixIcon from '../../assets/icons/pix.svg';
import amexIcon from '../../assets/icons/amex.svg';
import ticketIcon from '../../assets/icons/ticket.svg';
import sodexoIcon from '../../assets/icons/sodexo.svg';
import vtexIcon from '../../assets/icons/vtexIcon.svg';
import econverseIcon from '../../assets/icons/econverse.svg';


import './style.scss';

const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <section className="about">
                    <h4>Sobre nós</h4>
                    <p>CONHEÇA</p>
                    <p>COMO COMPRAR</p>
                    <p>INDICAÇÃO E DESCONTO</p>
                    <div className="socialMedia">
                    <img src={facebookIcon}></img>
                    <img src={instagramIcon}></img>
                    <img src={youtubeIcon}></img>
                    </div>
                </section>
                <section className="info">
                    <h4>INFORMAÇÕES ÚTEIS</h4>
                    <p>FALE CONOSCO</p>
                    <p>DÚVIDAS</p>
                    <p>PRAZOS DE ENTREGA</p>
                    <p>FORMAS DE PAGAMENTO</p>
                    <p>POLÍTICA DE PRIVACIDADE</p>
                    <p>TROCAS E DEVOLUÇÕES</p>
                </section>
                <section className="payment">
                    <h4>INFORMAÇÕES ÚTEIS</h4>
                    <div className="grid">
                        <img src={visaIcon}></img>
                        <img src={eloIcon}></img>
                        <img src={aleloIcon}></img>
                        <img src={dinnersIcon}></img>
                        <img src={ifoodIcon}></img>
                        <img src={mastercardIcon}></img>
                        <img src={pixIcon}></img>
                        <img src={amexIcon}></img>
                        <img src={ticketIcon}></img>
                        <img src={sodexoIcon}></img>
                    </div>

                </section>
                <section className="container-form" >
                    <div className="container-intern">
                        <h3 className="title-form">Cadastre-se e Receba nossas <span>novidades e promoções</span></h3>
                        <p className="description-form">Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                        <div className="input-form">
                            <input type="text" className="input-text" placeholder="SEU E-MAIL"></input>
                            <button className="input-submit">OK</button>
                        </div>
                    </div>
                </section>
                
            </div>
            <hr className="line-footer"></hr>
            <section className="container-copyright">
                    <div className="container-copyright-intern">
                        <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
                        <div className="icons">
                            <img src={vtexIcon}></img>
                            <img src={econverseIcon}></img> 
                        </div>
                    </div>
                </section>
        </footer>
    )
}

export default Footer;