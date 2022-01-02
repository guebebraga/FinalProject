import {useState, useEffect} from "react";

import './MainProductos.css';
import Producto from "../producto/Producto";


const MainProductos = () =>{
    const [productos2, setProductos2]= useState([]);

    useEffect(()=>{
    fetch("http://localhost:4000/productos")
    .then((response)=> response.json())
    .then((productos2)=> setProductos2(productos2.productos));
    },[productos2])

    return(
        <div className="contenedor2">
           <Producto source={productos2.slice(0,24)}/>
        </div>
    )
    };
export default MainProductos
