import React from "react";

import './MainProductos.css';
import ImageList from "../listImg/ListImg";


const productos2 = [ 
    'https://i.pinimg.com/236x/3a/39/72/3a39724eefbe7e940465de6ef84a0763.jpg',
    'https://i.pinimg.com/236x/9e/10/85/9e10857908d8d84a1c500fa92c63ce45.jpg',
    'https://i.pinimg.com/236x/5e/34/7f/5e347f6294f7fb353a377e9792a87988.jpg',     
    'https://i.pinimg.com/236x/a6/64/ec/a664ec323750e48a6be9f9cf58039e84.jpg',
    'https://i.pinimg.com/236x/e5/bf/e1/e5bfe1cfa27a679c4fc9866778f537ff.jpg',     
    'https://i.pinimg.com/236x/da/04/18/da04188f52cf14e3ab3f159d583e0d21.jpg',           
    'https://i.pinimg.com/564x/e2/93/14/e293140a933e0a71482e1ee2168b832c.jpg',   
    'https://i.pinimg.com/236x/5a/36/a7/5a36a7194f5a8bf4546870df10d912d9.jpg',
    'https://i.pinimg.com/236x/8f/7d/a6/8f7da6092777a362409cdc9a7e4f7710.jpg',      
    'https://i.pinimg.com/236x/a1/cb/83/a1cb8345baeef69e6ca4353668e2834a.jpg',       
    'https://i.pinimg.com/236x/19/7f/38/197f38c40313f830e1ba97702d693db4.jpg',
    'https://i.pinimg.com/236x/a3/14/05/a314053de04e93b29a01c8bbd6367289.jpg',
    'https://i.pinimg.com/236x/7b/c4/52/7bc45297e3648835c1d89e82e88709ba.jpg',
    'https://i.pinimg.com/236x/fd/d2/4f/fdd24fc60ee0d65a6d4ff50a8e30aa42.jpg',  
    'https://i.pinimg.com/236x/ba/12/df/ba12df3fc5ac6f4b4a07795ec349fa78.jpg',
    'https://i.pinimg.com/236x/12/7b/3d/127b3df33d621d53309c495adcbbdd57.jpg',
    'https://i.pinimg.com/236x/fd/f9/20/fdf920c205812d1eb4abe142f09df1ff.jpg',
    'https://i.pinimg.com/236x/8c/6e/81/8c6e81c3a156d3380353271cc3df50eb.jpg',
    'https://i.pinimg.com/236x/64/01/5c/64015c94ccb5312ab64a9e2c3aa1d2df.jpg',
    'https://i.pinimg.com/236x/1b/34/5b/1b345b7225b0b684ec205211fef1de21.jpg',

    

    

    
];

const MainProductos = () =>{
    return(
        <div className="contenedor2">
          <ImageList  source={productos2}/>
        </div>
    )
    };
export default MainProductos
