import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadastroVaga from "./components/CadastroVaga";
import EditaVaga from "./components/EditaVaga";
import ProcuraVaga from "./components/ProcuraVaga";
import Index from "./components/Index";
import './assets/styles/index.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Router>
      {/* ToastContainer fora das rotas */}
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cadastro" element={<CadastroVaga />} />
        <Route path="/editar" element={<EditaVaga />} />
        <Route path="/procurar" element={<ProcuraVaga />} />
      </Routes>
    </Router>
  );
}
