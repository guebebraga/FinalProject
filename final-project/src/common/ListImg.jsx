import React from "react";

const ImageList = ({source})=>{
    return(
        source.map((img)=>(
            <>
            <div>
                <img className="img" src={img} />
            </div>
            </>
        ))
        );
}

export default ImageList