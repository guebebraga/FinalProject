import React from "react";

import './MainHome.css';
import ImageListHome from "../listImgHome/ListImgHome";

const productos = [
    {
        nombre: 'Raton',
        link: 'https://i.pinimg.com/236x/da/04/18/da04188f52cf14e3ab3f159d583e0d21.jpg',
        precio: '20$', 
        clase:'perro',
    },
    {
        nombre: 'Correas',
        link: 'https://i.pinimg.com/236x/5e/34/7f/5e347f6294f7fb353a377e9792a87988.jpg',   
        precio: '30$',
        clase:'perro',
    },
    {
        nombre: 'Cuchas',
        link: 'https://i.pinimg.com/236x/a6/64/ec/a664ec323750e48a6be9f9cf58039e84.jpg',
        precio: '30$',
        clase:'perro',
    },
    {
        nombre:'Pollera', 
        link : 'https://i.pinimg.com/236x/e5/bf/e1/e5bfe1cfa27a679c4fc9866778f537ff.jpg',   
        precio: '25$',
        clase:'perro',
    },
    
    {
        nombre:'Pretales',
        link: 'https://i.pinimg.com/236x/8f/7d/a6/8f7da6092777a362409cdc9a7e4f7710.jpg',   
        precio: '40$',
        clase:'perro',
    },
    
    {
        nombre:'Collares',
        link:'https://i.pinimg.com/236x/fd/d2/4f/fdd24fc60ee0d65a6d4ff50a8e30aa42.jpg',   
        precio: '20$',
        clase:'perro',
    },
    
    {
        nombre:'Capucha',
        link:'https://i.pinimg.com/236x/a1/cb/83/a1cb8345baeef69e6ca4353668e2834a.jpg',  
        precio: '40$',
        clase:'perro',
    },
    {
        nombre:'Mochilas',
        link:'https://i.pinimg.com/236x/5a/36/a7/5a36a7194f5a8bf4546870df10d912d9.jpg',   
        precio: '54$',
        clase:'perro',
    },
    {
        nombre: 'Set correa',
        link:'https://i.pinimg.com/236x/f7/5b/14/f75b14ab8a6927819a521cbb1e0b3199.jpg',
        precio: '60$',
        clase:'perro',
    },
];

const MainHome = () =>{
  
    return(
        <div className="contenedor">
          <ImageListHome source={productos}/>
          <div className="imagenGrande">
          <img className= "imgPortada" src="https://i.pinimg.com/564x/e2/93/14/e293140a933e0a71482e1ee2168b832c.jpg" alt="imagenPrincipal"/>
          </div>
        </div>
    )
    };
export default MainHome
    
    

