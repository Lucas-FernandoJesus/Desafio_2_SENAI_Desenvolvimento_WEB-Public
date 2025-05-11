import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ProcuraVaga() {
  const [veiculos, setVeiculos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/veiculos")
      .then(res => res.json())
      .then(data => setVeiculos(data));
  }, []);

  return (
    <main>
      <div className="btn-center">
        <button className="voltar" onClick={() => navigate("/")}>
          ⬅ Voltar à Tela Inicial
        </button>
      </div>
      <h2>Veículos Estacionados</h2>
      <table>
        <thead>
          <tr>
            <th>Proprietário</th>
            <th>CPF</th>
            <th>Placa</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map(v => (
            <tr key={v.id}>
              <td>{v.proprietario}</td>
              <td>{v.cpf}</td>
              <td>{v.placa}</td>
              <td>{v.modelo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
