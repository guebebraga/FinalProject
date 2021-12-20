import React from "react";
import {Routes, Route} from 'react-router-dom';

import routePaths from './routePaths';

import Inicio from "./pages/inicio/inicio";
import Productos from "./pages/productos/productos";

const RoutesApp = () => {
    return (
      <>
        <Routes>
          <Route path={routePaths.inicio} element={< Inicio/>} />
          <Route path={routePaths.productos} element={< Productos/>} />
        </Routes>
      </>
    );
  }
  
  export default RoutesApp;
  