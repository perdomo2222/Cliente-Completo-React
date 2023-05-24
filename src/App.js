import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaLibros from './ListaLibros';
import AgregarLibros from './AgregarLibro';
import Nav from './Nav';
import './App.css';
import EditarLiro from './EditarLibro'

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListaLibros />} />
            <Route path="/agregar" element={<AgregarLibros />} />
            <Route path="/editar/:id" element={<EditarLiro />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
