import React from "react";

import Footer from '../../common/footer/Footer';
import Nav from "../../common/nav/Nav";
import Login from "../../common/login/Login";
import Registro from "../../common/registro/Registro";

import './miCuenta.css';


const MiCuenta =()=>{
    return(
      <>
      <Nav/>
      <Registro/>
      <div className="separacion"/>
      <Login/>
      <Footer/>
      </>  
    );
}
export default MiCuenta;