import React ,{useState, useEffect} from 'react';
import './app.scss';
import Header from './components/Header';
import Main from './components/Main';
import Categories from './components/Categories';
import TitleProducts from './components/TitleProducts';
import ProductCategory from './components/ProductCategory';
import Modal from './components/Modal';
import Product from './components/Product';
import PartnersInfo from './components/PartnersInfo';
import ProductInfo from './components/ProductInfo';
import Brands from './components/Brands';
import Footer from './components/Footer';
import leftButton from './assets/icons/leftArrow.svg';
import rightButton from './assets/icons/rightArrow.svg';


interface Iproduct {
  productName:string;
  descriptionShort:string;
  photo:string;
  price:number;
}


function App() {

  const [products, setProducts] = useState< null | Iproduct[]>([]);
  const [productModel, setProductModel] = useState<Iproduct>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<null | number>(null);
  

  useEffect(() => {

    fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
      .then(response => response.json())
      .then(data => {
        setProducts(() => data.products.slice(0,4));
      
      })
  }, [])

  useEffect(() => {
    if(index !== null){
      selecionaProduto();
    }
    
  }, [index])

  function selecionaProduto(){
    
    products?.forEach((item, i) => {
      if(i === index ){
        
        setProductModel(item);
      }
    })
    if(productModel !== undefined){
      setIsOpen(true);
    }
    
    setIndex(null);
  }

  return (
    <div className="container">
      <Header/>
      <Main/>
      <Categories/>
      <TitleProducts />
      <ProductCategory />
    
      <article className="container-showcase">
        <button className="previus-btn"> <img src={leftButton}></img></button>
        {products?.map((item,index) => (
          
          <Product 
            productName={item.productName}
            descriptionShort={item.descriptionShort}
            photo={item.photo}
            price={item.price}
            setBuy={setIndex}
            index={index}     
          />
        
      ))}
        <button className="next-btn"> <img src={rightButton}></img></button>
      </article>

      <PartnersInfo />
      <section className="titleProducts-all">
        <TitleProducts />
        <a href="#">Ver todos</a>
      </section>

      <article className="container-showcase">
        <button className="previus-btn"> <img src={leftButton}></img></button>
        {products?.map((item,index) => (
          
          <Product 
            productName={item.productName}
            descriptionShort={item.descriptionShort}
            photo={item.photo}
            price={item.price}
            setBuy={setIndex}
            index={index}     
          />
        
      ))}
        <button className="next-btn"> <img src={rightButton}></img></button>
      </article>

      <ProductInfo/>
      <Brands />
      <Footer />
      {
        productModel !== undefined && isOpen &&
        
          <Modal productName={productModel.productName}
                    descriptionShort={productModel.descriptionShort}
                    photo={productModel.photo}
                    price={productModel.price}
                    setActive={setIsOpen}
          />
        
      }
      
      
        

    </div>
  )
}

export default App
