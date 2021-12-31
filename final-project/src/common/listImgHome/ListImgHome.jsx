import React from "react";

import './ListImgHome.css';

const ImageListHome = ({source})=>{
    return(
        source.slice(0,9).map(({nombre,link,precio})=>(
            
            <div>
                <img className="img" alt={nombre} src={link} />
                <p>{nombre}{precio}</p> 
            </div>
            
        ))
        );
}
//slice(0,3) para limitar array            
export default ImageListHome