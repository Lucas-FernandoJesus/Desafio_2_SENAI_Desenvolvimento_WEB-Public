import React, { useEffect, useState } from "react";

export default function EditaVaga() {
  const [veiculos, setVeiculos] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3001/veiculos");
    const data = await res.json();
    setVeiculos(data);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3001/veiculos/${id}`, { method: "DELETE" });
    fetchData();
  };

  const handleEdit = async (id) => {
    const novoModelo = prompt("Digite o novo modelo:");
    if (!novoModelo) return;
    await fetch(`http://localhost:3001/veiculos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ modelo: novoModelo }),
    });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <h2>Editar Veículos Estacionados</h2>
      <table>
        <thead>
          <tr>
            <th>Proprietário</th>
            <th>CPF</th>
            <th>Placa</th>
            <th>Modelo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map(v => (
            <tr key={v.id}>
              <td>{v.proprietario}</td>
              <td>{v.cpf}</td>
              <td>{v.placa}</td>
              <td>{v.modelo}</td>
              <td>
                <button onClick={() => handleEdit(v.id)}>Editar</button>
                <button onClick={() => handleDelete(v.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
