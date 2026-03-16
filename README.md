# :clipboard: Sistema de Cadastro de Usuários


<p>Aplicação web full-stack desenvolvida para gerenciamento simples de usuários, permitindo cadastrar, listar e excluir usuários de forma prática através de uma interface moderna e responsiva.</p>

🔗 Deploy: https://cadastro-de-usuarios-nu.vercel.app/

📁 Repositório: https://github.com/MarianaASoares/projeto-cadastro-de-usuarios

---

# :rocket: Tecnologias 

## Front-End

<ul>
  <li>⚛️ React</li>
  <li>⚡Vite</li>
  <li>🎨 Styled Components</li>
  <li>🌐 Axios</li>
</ul>

## Back-End
<ul>
  <li>🟢 Node.js</li>
  <li>🚂 Express</li>
</ul>

## Banco de Dados
<ul>
  <li>🍃 MongoDB</li>
</ul>

---

# :camera: Preview

  <img src="assets/preview-cadastro-de-usuarios.gif" width = "100%"> 


  
🔗 [Ver projeto](https://cadastro-de-usuarios-nu.vercel.app/)

```
⚠️ API pública utilizada apenas para fins de demonstração.
```

---

# :computer: Interface da Aplicação

## Cadastro de Usuário

<p>Interface para cadastro de novos usuários informando nome, idade e e-mail.</p>

## Lista de Usuários

<p>Exibição dos usuários cadastrados com opção de exclusão individual.</p>

---

# :gear: Funcionalidades

<p>:heavy_check_mark: Cadastro de usuários.</p>
<p>:heavy_check_mark: Listagem de usuários cadastrados.</p>
<p>:heavy_check_mark: Exclusão de usuários.</p>
<p>:heavy_check_mark: Integração com banco de dados MongoDB.</p>
<p>:heavy_check_mark: Integração completa entre front-end e back-end.</p>
<p>:heavy_check_mark: Interface moderna e responsiva.</p>

---

# :file_folder: Estrutura do Projeto

```
projeto-cadastro-de-usuarios
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   └── routes
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── services
│   └── main.jsx
│
└── README.md

```

---

# :electric_plug: API 

## Listar usuários

```
GET /usuarios
```

<p>Retorna todos os usuários cadastrados.</p>

## Cadastrar usuário

```
POST /usuarios
```

<p>Exemplo de body:</p>

```
{
  "name": "Maria",
  "age": 25,
  "email": "maria@email.com"
}
```

## Deletar usuário

```
DELETE /usuarios/:id
```

<p>Remove um usuário pelo ID.</p>


---

# :books: Objetivo do Projeto
<p>Este projeto foi desenvolvido com fins educacionais durante meus estudos em desenvolvimento Full-Stack, com foco em:</p>
<ul>
  <li>Integração entre React e APIs REST</li>
  <li>Construção de APIs com Node.js e Express</li>
  <li>Utilização de MongoDB</li>
  <li>Publicação de aplicações em produção (Vercel e Render)</li>
</ul>

---

# :gear: Como rodar o projeto localmente

## :one: Clonar o repositório

```
git clone  https://github.com/MarianaASoares/projeto-cadastro-de-usuarios.git
```

## :two: Rodar o backend

```
# entrar na pasta
cd backend

# instalar dependências
npm install

# iniciar aplicação
npm start
```

## :three: Rodar o frontend

```
# entrar na pasta
cd frontend

# instalar dependências
npm install

# iniciar aplicação
npm run dev
```

# :warning: Observações

### Este projeto foi desenvolvido com fins educacionais durante meus estudos em desenvolvimento Full-Stack

### A API está hospedada publicamente no Render para permitir que a aplicação funcione normalmente em ambiente de demonstração.

# :woman_technologist: Autora

### Mariana Azevedo Soares




      
          
