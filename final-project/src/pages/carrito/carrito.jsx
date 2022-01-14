import React from "react";

import Footer from '../../common/footer/Footer';
import Nav from "../../common/nav/Nav";
import CarroDeCompras from "../../common/carroDeCompras/CarroDeCompras";

import './carrito.css';


const Carrito =()=>{
    return(
      <>
      <Nav/>     
      <CarroDeCompras/>
      <Footer/>
      </>  
    );
}
export default Carrito;
