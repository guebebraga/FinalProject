import React from "react";
import Footer from '../common/Footer';
import './inicio.css';

const Inicio =()=>{
    const text = 'Componente Footer con CSS';
    return(
      <>
      <span>{text}</span>
      <Footer/>

      </>  
    );
}
export default Inicio;