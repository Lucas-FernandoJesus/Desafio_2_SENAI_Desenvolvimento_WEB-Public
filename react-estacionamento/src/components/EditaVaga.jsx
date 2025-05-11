import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditaVaga() {
  const [veiculos, setVeiculos] = useState([]);
  const [editando, setEditando] = useState(null);
  const [formData, setFormData] = useState({ proprietario: "", cpf: "", placa: "", modelo: "" });
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await fetch("http://localhost:3001/veiculos");
    const data = await res.json();
    setVeiculos(data);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/veiculos/${id}`, { method: "DELETE" });
      toast.error("🗑️ Veículo excluído!");
      fetchData();
    } catch (err) {
      toast.error("Erro ao excluir o veículo");
    }
  };

  const abrirModalEdicao = (veiculo) => {
    setFormData({ ...veiculo });
    setEditando(veiculo.id);
  };

  const salvarEdicao = async () => {
    try {
      await fetch(`http://localhost:3001/veiculos/${editando}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setEditando(null);
      toast.success("✏️ Veículo atualizado com sucesso!");
      fetchData();
    } catch (err) {
      toast.error("Erro ao atualizar o veículo");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div className="btn-center">
        <button className="voltar" onClick={() => navigate("/")}>⬅ Voltar à Tela Inicial</button>
      </div>
      <h2>Editar/Remover Veículos Estacionados</h2>

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
                <button onClick={() => abrirModalEdicao(v)}>Editar</button>
                <button onClick={() => handleDelete(v.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editando && (
        <div className="modal">
          <div className="modal-content">
            <h3>Editar Veículo</h3>
            <input type="text" value={formData.proprietario} onChange={(e) => setFormData({ ...formData, proprietario: e.target.value })} placeholder="Proprietário" />
            <input type="text" value={formData.cpf} onChange={(e) => setFormData({ ...formData, cpf: e.target.value })} placeholder="CPF" />
            <input type="text" value={formData.placa} onChange={(e) => setFormData({ ...formData, placa: e.target.value })} placeholder="Placa" />
            <input type="text" value={formData.modelo} onChange={(e) => setFormData({ ...formData, modelo: e.target.value })} placeholder="Modelo" />
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button onClick={salvarEdicao}>Salvar</button>
              <button onClick={() => setEditando(null)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
