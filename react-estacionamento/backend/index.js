const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// CRUD
app.get("/veiculos", async (req, res) => {
  const veiculos = await prisma.veiculo.findMany();
  res.json(veiculos);
});

app.post("/veiculos", async (req, res) => {
  const novo = await prisma.veiculo.create({ data: req.body });
  res.json(novo);
});

app.put("/veiculos/:id", async (req, res) => {
  const { id } = req.params;
  const atualizado = await prisma.veiculo.update({
    where: { id: Number(id) },
    data: req.body,
  });
  res.json(atualizado);
});

app.delete("/veiculos/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.veiculo.delete({ where: { id: Number(id) } });
  res.status(204).send();
});

app.listen(3001, () => console.log("🚗 API rodando em http://localhost:3001"));
