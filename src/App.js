import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";

export default function App() {
  return (
    <html>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </ Routes>
    </html>
  );
}

