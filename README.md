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
   npm install --legacy-peer-deps
   ```

2. **Configure as variáveis de ambiente:**

   ```bash
   npm run setup:env
   ```

   Edite o arquivo `.env.local` e adicione suas credenciais do Firebase:

   ```env
   FIREBASE_API_KEY=
   FIREBASE_AUTH_DOMAIN=
   FIREBASE_PROJECT_ID=
   FIREBASE_STORAGE_BUCKET=
   FIREBASE_MESSAGING_SENDER_ID=
   FIREBASE_APP_ID=
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm start
   ```

   Acesse `http://localhost:4200/`.

4. **Testes e Build:**

   ```bash
   npm test          # Executa testes unitários
   npm run build     # Gera versão de produção em /dist
   ```

## 🔐 Variáveis de Ambiente

As variáveis de configuração são injetadas automaticamente no build através de um script:

- **`.env.local`** – Suas credenciais locais (não commitar)
- **`.env.example`** – Template de referência
- **`.env.production`** – Template para produção
- **`scripts/load-env.js`** – Script que injeta variáveis no build
- **`src/environments/env.generated.ts`** – Arquivo gerado (não commitar)

> ⚠️ **Segurança:** O script executa automaticamente antes de `npm start`, `npm build` e `npm test`, gerando um arquivo com as variáveis do `.env.local`. Nunca commitar `.env.local` ou `env.generated.ts`.

## 👤 Autoria

- **Desenvolvedor:** Matheus Vilela
- **Instituição:** FIAP (Imersão FIAP/CAIXAVERSO)
- **Licença:** MIT
