import React from "react";
import './Producto.css';


const Producto = ({source})=>{
    return(
        source.map(({nombre,link,precio})=>(       
            <div className="box">
                <img className="img" alt={nombre} src={link} />
                <p>{nombre}{precio}</p>
            </div>
        ))
        );
}
         
export default Producto