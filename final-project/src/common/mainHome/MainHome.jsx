import React from "react";

import './MainHome.css';
import ImageList from "../listImg/ListImg";

const productos = [ 
    'https://i.pinimg.com/236x/3a/39/72/3a39724eefbe7e940465de6ef84a0763.jpg',
    'https://i.pinimg.com/236x/9e/10/85/9e10857908d8d84a1c500fa92c63ce45.jpg',
    'https://i.pinimg.com/236x/5e/34/7f/5e347f6294f7fb353a377e9792a87988.jpg',     
    'https://i.pinimg.com/236x/a6/64/ec/a664ec323750e48a6be9f9cf58039e84.jpg',
    'https://i.pinimg.com/236x/e5/bf/e1/e5bfe1cfa27a679c4fc9866778f537ff.jpg',     
    'https://i.pinimg.com/236x/8f/7d/a6/8f7da6092777a362409cdc9a7e4f7710.jpg',      
    'https://i.pinimg.com/236x/fd/d2/4f/fdd24fc60ee0d65a6d4ff50a8e30aa42.jpg',       
    'https://i.pinimg.com/564x/e2/93/14/e293140a933e0a71482e1ee2168b832c.jpg',   
    'https://i.pinimg.com/236x/5a/36/a7/5a36a7194f5a8bf4546870df10d912d9.jpg',
    
];

const MainHome = () =>{
    return(
        <div className="contenedor">
          <ImageList source={productos}/>
          <div className="imagenGrande">
          <img className= "imgPortada" src="https://i.pinimg.com/564x/e2/93/14/e293140a933e0a71482e1ee2168b832c.jpg" alt="imagenPrincipal"/>
          </div>
        </div>
    )
    };
export default MainHome
    
    

