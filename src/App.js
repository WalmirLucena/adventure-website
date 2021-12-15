import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Provider from "./contexts/Provider";

export default function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </ Routes>
    </Provider>
  );
}

