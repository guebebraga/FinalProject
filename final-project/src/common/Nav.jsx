import React from "react";

import "./Nav.css";

const nav = ()=>{
    return(
        <nav className="nav">                                                     
        <h1>AnimalPlace</h1>
        <ul>
            <li><a href="localhost:3000">Home</a></li>
            <li><a href="../pages/productos.html">Productos</a></li>
            <li><a href="../pages/miCuenta.html">Mi Cuenta</a></li>
            <li><a href="../pages/carrito.html">Carrito</a></li>
        </ul>
        </nav>
    )
};

export default nav;