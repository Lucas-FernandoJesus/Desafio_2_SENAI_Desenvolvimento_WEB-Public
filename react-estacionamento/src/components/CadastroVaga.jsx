import React, { useState } from "react";

export default function CadastroVaga() {
  const [form, setForm] = useState({ proprietario: "", cpf: "", placa: "", modelo: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/veiculos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Veículo cadastrado com sucesso!");
    setForm({ proprietario: "", cpf: "", placa: "", modelo: "" });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input id="proprietario" value={form.proprietario} onChange={handleChange} placeholder="Nome do proprietario" required />
        <input id="cpf" value={form.cpf} onChange={handleChange} placeholder="CPF do proprietario" required />
        <input id="placa" value={form.placa} onChange={handleChange} placeholder="Número da placa" required />
        <input id="modelo" value={form.modelo} onChange={handleChange} placeholder="Modelo do veículo" required />
        <button type="submit">Salvar</button>
      </form>
    </main>
  );
}
