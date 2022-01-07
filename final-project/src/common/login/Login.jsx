import React, { useState } from "react";

import "./Login.css";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit =(e) => {
    // PARA EVITAR QUE EL FORM RESFRESQUE LA PAGINA   
    e.preventDefault();

    if (mail && password){
    fetch("http://localhost:4000/miCuenta/login" , {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({mail,password}),
        })
        .then((response)=>response.json() 
        .then((result) =>{
          console.log(result);
            if (result.error){
              alert(result.error)
            }
            if (!result.error) {
              window.localStorage.setItem("token", result.token);
              alert("Login exitoso",response.mensaje);
              console.log(result);
            } 
            else {
            alert("Login fallido", response.mensaje);
            }
        }));
      }
      else{
        alert('Completar todos los campos');
      }
  }
  return (
    <div >
      <h1>Ya eres usuario</h1>
      <form className= "form" onSubmit={handleSubmit}>
        <input placeholder="Ingese mail" value={mail} onChange={(e) => setMail(e.target.value)} type="email" />
        <input placeholder="Ingese pass" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <button className="login">Ingresar</button>
      </form>
    </div>
  )             
};

export default Login;