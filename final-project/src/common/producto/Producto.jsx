import React from "react";

import './Producto.css';

const Producto = ({source})=>{
    return(
        source.map(({nombre,link,precio})=>(       
            <div>
                <img className="img" alt={nombre} src={link} />
                <p>{nombre}{precio}</p> 
            </div>
            
        ))
        );
}
//slice(0,3) para limitar array            
export default Producto