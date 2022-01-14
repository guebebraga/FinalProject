import React from "react";

import './ProductCarrito.css';

const ProductCarrito = ({data, handleRemoveProd})=>{
    let {link,nombre,precio}= data
    return(
            <div className="productoCarrito">
                <img className="foto" src={link} alt=""/>
                <h5>{nombre}</h5>
                <h5>${precio}</h5>
                <button onClick={()=>handleRemoveProd(data.nombre)} className="botonLimpiar">Limpiar</button>           
            </div>
            
        );
}

export default ProductCarrito