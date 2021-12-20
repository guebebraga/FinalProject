import React from "react";

import { useState } from "react";

import './Form.css';

const Form = ()=>{
    return(
        <form>
            <label htmlFor="">Ingrese su nombre</label>
            <input type="text" value={''}/>
            <label htmlFor="">Ingrese su email</label>
            <input type="email" value={''}/>
            <label htmlFor="">Ingrese su contraseña</label>
            <input type="password" value={''}/>
        </form>
       
    )
    
};

export default Form;