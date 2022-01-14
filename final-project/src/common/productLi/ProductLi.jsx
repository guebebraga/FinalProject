import React from "react";

import './ProductLi.css';

const ProductLi = ({data ,handleAddProd})=>{
    let {link,nombre,precio,clase}= data
    return(
        <div className="listaProd">
        <img className="foto2" src={link} alt=""/>
        <h5>{nombre}</h5>
        <h5>${precio}</h5>
        <h5>{clase}</h5>
        <button className ="boton2" onClick={()=>handleAddProd(data)}>Agreagr</button>
    </div>
            
    );
}
export default ProductLi
