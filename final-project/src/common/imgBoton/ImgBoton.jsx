import React from "react";

import "./ImgBoton.css";

const ImgBoton = () =>{
    return(
        <div className="figure">
        <h1>PERROS</h1>
        <h2>PRODUCTOS</h2>
        <br />
        <button id="button">Ver Todo</button>
        <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/YmYcfeRXG60" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
        </div>
         )
    };

export default ImgBoton;


