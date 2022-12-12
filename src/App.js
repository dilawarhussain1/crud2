import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/Read" element={<Read />} />
        <Route path="/Update" element={<Update />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
