import React from "react";

import './ListImgProd.css';

const ImageListProd = ({source})=>{
    return(
        source.slice(0,24).map(({nombre,link,precio})=>(
            
            <div>
                <img className="img" alt={nombre} src={link} />
                <p>{nombre}{precio}</p> 
            </div>
            
        ))
        );
}
//slice(0,3) para limitar array            
export default ImageListProd