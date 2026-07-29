<div align="center">

<img src="https://www.svgrepo.com/show/427122/location.svg" alt="Search Icon" width="90">

# Autocomplete Search

> Desafio Técnico • fullstack

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white)
![Apollo](https://img.shields.io/badge/Apollo-311C87?style=flat-square&logo=apollographql&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

</div>

---

Sistema de auto-completar desenvolvido como solução para desafio técnico.
Essa aplicação tem a implementação de uma barra de pesquisa em front end (ReactJS) e um backend básico que lida com requisições StartWith, buscando no banco de dados o que o usuário pode estar pesquisando. Tive a oportunidade de aprender muitas coisas com esse projeto, visto que nunca tinha usado 60% do que foi utilizado. Para ver com mais detalhes meus comentários, consulte a documentação.
A aplicação é composta por um frontend em React e um backend GraphQL em conjunto com uma base json responsável por fornecer sugestões de busca em tempo real.

---

# 📌 Status

> 🚧 **Em desenvolvimento**

### Progresso

- [x] Planejamento
- [x] Estrutura inicial
- [x] Backend GraphQL
- [x] Serviço de sugestões
- [x] Frontend
- [x] Autocomplete
- [x] Docker
- [x] GitHub Actions
- [ ] Testes
- [x] Documentação

---

# 📂 Estrutura

```text
.
├── .github/
│   └── workflows/
├── backend/
├── frontend/
├── README.md
├── TASKS.md
└── COMMENTS.md
```

---

# 🚀 Como executar

## Pré-requisitos

- Docker
- Docker Compose

## Desenvolvimento
Tanto o backend quanto o frontend tem seus próprios arquivos .env, importantes para configurar o programa corretamente. Altere-os seguindo o setup que deseja e utilizando o .env.example para ajustar as variáveis. 

```bash
# Backend
cd backend

# Frontend
cd frontend
```

## Docker

```bash
docker compose up
```

---

## bug: interface

A interface abaixo é o produto final do código:

https://github.com/user-attachments/assets/2f0528f0-59c0-467d-9e94-47e6facfb859

Nela é possível perceber 2 bugs, um deles decorrente da escolha lógica que fiz para o front end (o negrito nas palavras que não são identicas) e o outro é desconhecido, que é a interface sumindo ao atualizar a página. Não consegui isolar os casos para aperfeiçoar esse produto.

________
# 📄 Documentação

O desenvolvimento do projeto é acompanhado pelos seguintes documentos:

| Arquivo | Descrição |
|---------|-----------|
| **TASKS.md** | Planejamento e microtarefas |
| **HISTORY.md** | Decisões arquiteturais, reflexões e uso de IA |

---
