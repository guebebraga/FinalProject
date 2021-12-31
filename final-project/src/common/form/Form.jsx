import React, { useState } from "react";
import axios from "axios";

import "./Form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    // PARA EVITAR QUE EL FORM RESFRESQUE LA PAGINA   
    e.preventDefault();

    const user = { email, password };

    const result = await axios.post("http://localhost:3000/login", user);

    window.localStorage.setItem("app_user", JSON.stringify(result.data));
  }

  return (
    <div >
      <h1>Ya eres usuario</h1>
      <form className= "form" onSubmit={handleSubmit}>
        <input placeholder="ingese mail" email="user" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        <input placeholder="ingese pass" email="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <button className="crear">Log In</button>
      </form>
    </div>
  )             
};

export default Form;