import React, { useState } from "react";

import "./Registro.css";

const Registro = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  const handleSubmit =(e) => {
    // PARA EVITAR QUE EL FORM RESFRESQUE LA PAGINA   
    e.preventDefault();
    //const user = { mail, password ,name};

    if (mail && password && name){
    fetch("http://localhost:4000/miCuenta/registro" , {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({mail,name,password}),
        })
        .then(function (response) {
            return response.json();
          })
          .then(function (response) {
            if (response.error) {
              alert(response.error);
            } else {
              alert("Yea baby! usuario creado correctamente!",response.message);
            }
          });
        }
        else{
          alert('Campos sin completar bro')
        }
  }

  return (
    <div >
      <h1>Crea tu usuario</h1>
      <form className= "form2" onSubmit={handleSubmit}>
        <input placeholder="Ingese nombre" value={name} onChange={(e) => setName(e.target.value)} type="name" />
        <input placeholder="Ingese mail" value={mail} onChange={(e) => setMail(e.target.value)} type="mail" />
        <input placeholder="Ingese pass" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <button className="crear">Registro</button>
      </form>
    </div>
  )             
};

export default Registro;