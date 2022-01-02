import {useState, useEffect} from "react";

import './MainHome.css';
import Producto from "../producto/Producto";


const MainHome = () =>{

    const [productos, setProductos]= useState([]);

    useEffect(()=>{
    fetch("http://localhost:4000/productos")
    .then((response)=> response.json())
    .then((productos)=> setProductos(productos.productos));
    },[productos])
  
    return(
        <div className="contenedor">
          <Producto source={productos.slice(0,9)}/>
          <div className="imagenGrande">
          <img className= "imgPortada" src="https://i.pinimg.com/564x/e2/93/14/e293140a933e0a71482e1ee2168b832c.jpg" alt="imagenPrincipal"/>
          </div>
        </div>
    )
    };
export default MainHome
    
    

