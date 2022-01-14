import React from "react";
import {useState, useEffect} from "react";
import ProductCarrito from "../productCarrito/ProductCarrito";
import ProductLi from "../productLi/ProductLi";


import "./CarroDeCompras.css";


const CarroDeCompras =()=>{

    const inicialState = [];

    const [prodCar, setProdCar] = useState(inicialState);
    const [productos, setProductos]= useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/productos")
        .then((response)=> response.json())
        .then((productos)=> setProductos(productos.productos));
        },[productos])
            
   const handleAddProd=(data)=>{
        const newProd ={
            nombre: data.nombre,
            precio: data.precio,
            link: data.link,
            clase: data.clase
        }
        setProdCar([...prodCar,newProd])
     };

     const handleRemoveProd=(name)=>{
         const newProducts = prodCar.filter((prod)=>prod.nombre !== name);
         setProdCar(newProducts)
    };
   
    return(
        <div className="carrito"> 
            <h1>Carrito de Compras</h1>
            <h2>Lista de Productos</h2>
            <article className="">{
             productos.map((product)=><ProductLi data={product} handleAddProd ={handleAddProd}/>)
             }
            </article>
            <br />
            <h2>Productos Agregados al Carrito</h2>
            <article className="">{
            prodCar.map((product)=><ProductCarrito key={product.id} data={product} handleRemoveProd={handleRemoveProd}/>)
            }
            </article>
        </div>

    );
};

export default CarroDeCompras;
