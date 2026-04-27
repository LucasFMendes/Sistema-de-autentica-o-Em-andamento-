Sistema de Autenticação de Usuários (EM ANDAMENTO)

Sistema completo de autenticação de usuários com cadastro, login seguro via JWT e integração com banco de dados PostgreSQL, incluindo dashboard administrativo com listagem de usuários, controle de sessões, proteção de rotas, gerenciamento de usuários e estrutura organizada em frontend e backend seguindo boas práticas de desenvolvimento profissional.

---

 🚀 Funcionalidades

* Cadastro de usuários
* Login com autenticação JWT
* Proteção de rotas privadas
* Dashboard administrativo
* Listagem de usuários cadastrados
* Exibição do usuário logado
* Logout com encerramento de sessão
* Middleware de autenticação
* Integração com PostgreSQL
* Organização profissional em frontend e backend
* Loading de requisições
* Interface moderna e responsiva

---

🛠 Tecnologias utilizadas

### Backend

* Node.js
* Express.js
* PostgreSQL
* Knex.js
* JWT (JSON Web Token)
* Bcrypt
* Dotenv
* Cors

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### Ferramentas

* Git
* GitHub
* Beekeeper Studio
* VS Code
* Nodemon

---

## 📁 Estrutura do Projeto

```bash
sistema-de-autenticacao/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   ├── package.json
│   └── knexfile.js
│
├── frontend/
│   ├── index.html
│   ├── dashboard.html
│   ├── style.css
│   ├── dashboard.css
│   │
│   └── js/
│       ├── api.js
│       └── dashboard.js
│
└── README.md
```

---

## ⚙️ Como executar o projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

---

## 2. Entrar na pasta do backend

```bash
cd backend
```

---

## 3. Instalar dependências

```bash
npm install
```

---

## 4. Configurar variáveis de ambiente

Criar o arquivo `.env`

```env
PORT=3001

DB_HOST=localhost
DB_USER=postgres
DB_PASS=postgres
DB_NAME=pdv

SENHA_JWT=MySecurityKey
```

---

## 5. Rodar migrations (caso utilize)

```bash
npx knex migrate:latest
```

---

## 6. Iniciar servidor

```bash
npm run dev
```

Servidor rodando em:

```bash
http://localhost:3001
```

---

## 7. Abrir frontend

Basta abrir o arquivo:

```bash
frontend/index.html
```

ou utilizar a extensão Live Server no VS Code.

---

## 🔐 Rotas principais da API

### Cadastro

```http
POST /api/usuarios
```

### Login

```http
POST /api/login
```

### Usuário logado

```http
GET /api/me
```

### Listagem de usuários

```http
GET /api/usuarios
```

### Editar usuário

```http
PUT /api/usuarios/:id
```

### Excluir usuário

```http
DELETE /api/usuarios/:id
```

---

📊 Dashboard

O sistema possui um painel administrativo com:

* quantidade de usuários cadastrados
* visualização de usuários
* controle de sessão
* área de relatórios
* configurações básicas do sistema

---

💼 Objetivo do Projeto

Este projeto foi desenvolvido com foco em portfólio profissional, demonstrando conhecimentos em:

* autenticação segura
* integração frontend + backend
* consumo de APIs REST
* estruturação de projetos reais
* boas práticas de desenvolvimento
* organização de código para ambiente corporativo

---

👨‍💻 Autor

Desenvolvido por Lucas Felipe
Desenvolvedor Full Stack com foco em Backend, APIs RESTful e integração de sistemas.

GitHub: [https://github.com/seu-usuario](https://github.com/seu-usuario)

LinkedIn: adicionar-linkedin-aqui

---

⭐ Observação

Este projeto continua em evolução e novas funcionalidades poderão ser adicionadas futuramente, como:

* gráficos com Chart.js
* modo dark
* paginação avançada
* busca em tempo real
* modal de edição
* sistema de permissões
* níveis de acesso
