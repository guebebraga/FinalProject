import React from "react";

import Footer from '../../common/footer/Footer';
import Nav from "../../common/nav/Nav";
import MainProductos from "../../common/mainProductos/MainProductos";

import './productos.css';

const Productos =()=>{
    return(
      <>
      <Nav/>
      <br />
      <MainProductos/>
      <Footer/>
      </>  
    );
}
export default Productos;