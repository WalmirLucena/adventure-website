import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Provider from "./contexts/Provider";
import Packages from "./Pages/Packages";
import Categorias from "./Pages/Categorias";

export default function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categorias/:name" element={<Categorias/>}/>
        <Route path="/pacotes/:id" element={<Packages/>}/>
      </ Routes>
    </Provider>
  );
}

