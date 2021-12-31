import React from "react";

import "./Nav.css";

const nav = ()=>{
    return(
        <nav className="nav">                                                     
        <h1>AnimalPlace</h1>
        <ul>
            <li><a href="http://localhost:3000">Home</a></li>
            <li><a href="http://localhost:3000/productos">Productos</a></li>
            <li><a href="http://localhost:3000/miCuenta">Mi Cuenta</a></li>
            <li><a href="http://localhost:3000/carrito">Carrito</a></li>
        </ul>
        </nav>
    )
};

export default nav;