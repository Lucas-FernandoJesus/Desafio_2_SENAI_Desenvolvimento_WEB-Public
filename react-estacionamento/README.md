# 🚗 Sistema de Controle de Estacionamento

Um sistema web completo para gestão de vagas de estacionamento. Desenvolvido com **React no frontend** e **Node.js + Express + Prisma no backend**, esse projeto permite cadastrar, editar, listar e excluir veículos de forma eficiente.

---

## 📦 Funcionalidades

- ✅ Cadastro de veículos com validação de campos
- ✅ Listagem dinâmica dos veículos estacionados
- ✅ Edição e exclusão via interface
- ✅ Comunicação entre frontend e backend via API REST
- ✅ Notificações amigáveis com `react-toastify`
- ✅ Responsivo (mobile-friendly)
- ✅ Design limpo com CSS modularizado

---

## 🛠️ Tecnologias Utilizadas

### 🔹 Frontend
- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [`react-toastify`](https://fkhadra.github.io/react-toastify/) para notificações visuais
- `useState` e `useEffect` para manipulação de estado e efeitos
- CSS modularizado e responsivo (`index.css`, `var.css`, `media.css`)
- [Vite](https://vitejs.dev/) para desenvolvimento rápido e moderno

### 🔹 Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/) com SQLite ou PostgreSQL
- API REST com endpoints para CRUD completo

---

## ⚙️ Como rodar o projeto

🖥️ Rodar o Backend
- cd backend
- npm install
- npx prisma generate
- npx prisma migrate dev --name init
- node index.js
- Servidor rodará em: http://localhost:3001

🌐 Rodar o Frontend
- cd frontend
- npm install
- npm run dev

### 📥 Clonar o repositório
git clone https://github.com/seu-usuario/react-estacionamento.git
cd react-estacionamento