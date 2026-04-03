# 🧢 VESTE.URBAN — Landing Page + API (Fullstack)

Projeto desenvolvido como teste técnico para criação de uma landing page moderna para uma marca fictícia de streetwear, com integração a uma API e banco de dados.

---

## 🚀 Sobre o projeto

A **VESTE.URBAN** é uma marca de streetwear focada em drops limitados.
Esta aplicação foi desenvolvida para simular uma landing page real utilizada para divulgação de coleções e produtos, com dados dinâmicos vindos de uma API.

---

## 🧩 Tecnologias utilizadas

### Frontend

* React (Vite)
* TypeScript
* TailwindCSS
* Axios
* Framer Motion

### Backend

* Node.js
* Express
* MySQL
* dotenv
* mysql2

---

## 🎨 Identidade visual

Paleta aplicada conforme briefing:

* Azul Noite: `#1A1A2E`
* Vermelho Urbano: `#E94560`
* Off-White: `#F8F8FC`
* Lilás Claro: `#E8E8F4`
* Branco: `#FFFFFF`
* Cinza Texto: `#444444`

Tipografia:

* Títulos: Space Grotesk
* Texto: Inter

---

## 📄 Estrutura da página

A landing page contém:

* Navbar fixa com CTA
* Hero (Drop atual)
* Produtos em destaque
* Contagem regressiva do próximo drop
* Lookbook com modal
* Sobre a marca
* Depoimentos
* Footer

---

## 📁 Estrutura do projeto
🔹 Frontend (/src)
src/
├── assets/
│   └── images/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── CountdownSection.tsx
│   │   ├── LookbookSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── TestimonialSection.tsx
│   └── ui/
│       └── ProductCard.tsx
├── services/
│   └── api.ts
├── types/
│   └── product.ts
├── App.tsx
└── main.tsx

📌 Organização baseada em:

separação por responsabilidade (layout, sections, ui)
componentes reutilizáveis
tipagem centralizada

---

## 🔹 Backend (/backend/src)
backend/src/
├── config/
│   └── db.js
├── controllers/
│   └── productsController.js
├── routes/
│   └── products.js
├── app.js
└── server.js

📌 Arquitetura:

config: conexão com banco
controllers: lógica de negócio
routes: definição de endpoints
app: middlewares
server: inicialização

---

## 🔗 API (CRUD de produtos)

### Endpoints

| Método | Rota          | Descrição         |
| ------ | ------------- | ----------------- |
| GET    | /products     | Listar produtos   |
| GET    | /products/:id | Buscar por ID     |
| POST   | /products     | Criar produto     |
| PUT    | /products/:id | Atualizar produto |
| DELETE | /products/:id | Deletar produto   |

---

## 🗄️ Banco de dados (MySQL)

```sql
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price VARCHAR(50) NOT NULL,
  tag VARCHAR(100),
  image TEXT NOT NULL
);
```

---

## ⚙️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/Matheusfelislino/Landing_Page_Teste
```

---

### 2. Rodar o backend

```bash
cd backend
npm install
npm run dev
```

Criar `.env`:

```env
PORT=3001
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=veste_urban
```

---

### 3. Rodar o frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔌 Integração

O frontend consome os dados da API:

```
http://localhost:3001/products
```

---

## ✨ Funcionalidades

* Layout responsivo
* Consumo de API com MySQL
* Filtro de produtos
* Animações suaves
* Modal de imagens (Lookbook)
* Countdown dinâmico
* Estrutura organizada por componentes

---

## 📦 Diferenciais

* Arquitetura fullstack (React + Node + MySQL)
* Código modular e escalável
* Separação clara de responsabilidades
* Projeto pronto para evolução

---

## ⚠️ Observações

* Imagens utilizadas como placeholder
* CRUD disponível via API (sem painel admin)
* Projeto focado em landing page + integração

---

## 🌐 Deploy

Frontend: Vercel
Backend: Render ou Railway
Banco: MySQL local ou cloud

---

## 👨‍💻 Autor

Matheus Felis Lino

---

## 📌 Considerações

Projeto desenvolvido com foco em organização, fidelidade ao briefing e experiência do usuário.

---

🔥 Possíveis melhorias:

* Painel administrativo (CRUD visual)
* Upload de imagens
* Autenticação
* Integração com pagamento
