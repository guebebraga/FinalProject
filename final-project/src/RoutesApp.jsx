import React from "react";
import {Routes, Route} from 'react-router-dom';

import routePaths from './routePaths';
import Inicio from "./pages/inico";

const RoutesApp = () => {
    return (
      <>
        <Routes>
          <Route path={routePaths.index} element={< Inicio/>} />
        </Routes>
      </>
    );
  }
  
  export default RoutesApp;
  