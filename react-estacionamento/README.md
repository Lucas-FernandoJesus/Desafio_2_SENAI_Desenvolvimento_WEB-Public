# 🚗 Sistema de Controle de Estacionamento

Um sistema web completo para gestão de vagas de estacionamento. Desenvolvido com **React no frontend** e **Node.js + Express + Prisma no backend**, esse projeto permite cadastrar, editar, listar e excluir veículos de forma eficiente.

---

## 📦 Funcionalidades

- ✅ Cadastro de veículos com validação de campos
- ✅ Listagem dinâmica dos veículos estacionados
- ✅ Edição e exclusão via interface
- ✅ Comunicação entre frontend e backend via API REST
- ✅ Responsivo (mobile-friendly)
- ✅ Design limpo com CSS modularizado

---

## 🛠️ Tecnologias Utilizadas

### 🔹 Frontend
- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- `useState` e `useEffect` para manipulação de estado e efeitos
- CSS modularizado e responsivo (`index.css`, `var.css`, `media.css`)
- Vite (para desenvolvimento rápido e moderno)

### 🔹 Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/) com SQLite ou PostgreSQL
- API REST com endpoints para CRUD completo

---

## ⚙️ Como rodar o projeto

### 📥 Clonar o repositório

```bash
git clone https://github.com/seu-usuario/react-estacionamento.git
cd react-estacionamento
```

### 🖥️ Rodar o Backend

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
node index.js
```

Servidor rodará em: [http://localhost:3001](http://localhost:3001)

---

### 🌐 Rodar o Frontend

```bash
cd frontend
npm install
npm run dev
```

Acesse o app: [http://localhost:5173](http://localhost:5173)

---

## 📁 Estrutura de Pastas

```
react-estacionamento/
├── backend/
│   ├── index.js
│   ├── prisma/
│   └── ...
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── styles/
    │   └── ...
```

---

## 👨‍💻 Desenvolvido por

[Lucas Fernando](https://github.com/Lucas-FernandoJesus)

---

## 📜 Licença

Este projeto é open-source e pode ser usado livremente. Só não estacione na vaga errada. 😁