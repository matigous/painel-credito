# Painel de Crédito

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Angular](https://img.shields.io/badge/angular-20.3-red)
![License](https://img.shields.io/badge/license-MIT-blue)

Aplicação web educacional desenvolvida durante a **Imersão FIAP/CAIXAVERSO**. O projeto demonstra conceitos modernos de Angular (v20+) com foco em componentes standalone, Signals e integração com GraphQL.

## ✨ Funcionalidades

- **Gestão de Crédito:** Listagem e acompanhamento de solicitações com diferentes status.
- **Segurança:** Sistema de autenticação com Guards e Interceptors para injeção de tokens.
- **Interface:** Painel responsivo construído com componentes reutilizáveis e SCSS.
- **Consumo de Dados:** Integração robusta com API via Apollo Client (GraphQL).

## 🛠 Tecnologias

- **Core:** Angular 20, TypeScript 5.9, RxJS 7.8, Signals.
- **API:** GraphQL & Apollo Client.
- **Estilo:** SCSS & Flexbox/Grid.
- **Testes:** Karma & Jest.

## 📁 Estrutura do Projeto

```bash
src/app/
├── components/     # Componentes (Login, Lista de Solicitações, Header)
├── services/       # Lógica de negócio (Auth, GraphQL)
├── guards/         # Proteção de rotas
├── interceptors/   # Manipulação de requisições HTTP
├── models/         # Interfaces e Tipos
└── app.routes.ts   # Configuração de rotas (Lazy Loading)
```

## 🚀 Como Executar

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm start
   ```

   Acesse `http://localhost:4200/`.

3. **Testes e Build:**

   ```bash
   npm test          # Executa testes unitários
   npm run build     # Gera versão de produção em /dist
   ```

## 👤 Autoria

- **Desenvolvedor:** Matheus Vilela
- **Instituição:** FIAP (Imersão FIAP/CAIXAVERSO)
- **Licença:** MIT
