import React from "react";
import Footer from '../../common/footer/Footer';
import Nav from "../../common/nav/Nav";
import MainHome from "../../common/mainHome/MainHome";
import ImgBoton from "../../common/imgBoton/ImgBoton";


import './inicio.css';

const Inicio =()=>{
    return(
      <>
      <Nav/>
      <br />
      <MainHome/>
      <ImgBoton/>
      <Footer/>
      </>  
    );
}
export default Inicio;