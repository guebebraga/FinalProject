import React from "react";

import './ListImg.css';

const ImageList = ({source})=>{
    return(
        source.map((link)=>(
            <>
            <div>
                <img className="img" alt= 'img' src={link} />
            </div>
            </>
        ))
        );
}

export default ImageList