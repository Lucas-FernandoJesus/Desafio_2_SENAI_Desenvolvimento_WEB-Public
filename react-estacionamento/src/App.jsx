
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadastroVaga from "./components/CadastroVaga";
import EditaVaga from "./components/EditaVaga";
import ProcuraVaga from "./components/ProcuraVaga";
import Index from "./components/Index";
import './assets/styles/index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cadastro" element={<CadastroVaga />} />
        <Route path="/editar" element={<EditaVaga />} />
        <Route path="/procurar" element={<ProcuraVaga />} />
      </Routes>
    </Router>
  );
}
