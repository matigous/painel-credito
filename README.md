# 🏦 Painel de Crédito

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Angular](https://img.shields.io/badge/angular-20.3-red)
![License](https://img.shields.io/badge/license-MIT-blue)

Olá! 👋 Bem-vindo ao repositório do **Painel de Crédito**. 

Esta é uma aplicação web educacional desenvolvida durante a **Imersão FIAP/CAIXAVERSO**. Nosso principal objetivo aqui é demonstrar conceitos modernos de Angular (v20+), adotando uma arquitetura escalável e reativa.

---

## ✨ O que você vai encontrar aqui? (Funcionalidades)

- 📊 **Gestão de Crédito:** Listagem, visualização de detalhes, edição e exclusão de solicitações.
- 🧮 **Simulador de Crédito:** Uma ferramenta interativa para cálculo de parcelas (Tabela Price), impulsionada por Angular Signals para cálculos matemáticos instantâneos.
- 🌍 **Internacionalização (i18n):** Suporte a múltiplos idiomas utilizando `@ngx-translate`.
- 📋 **Log de Atividades:** Registro automático e histórico de todas as ações feitas no painel (criação, edição e exclusões).
- 🔒 **Segurança Reforçada:** Sistema de autenticação protegido com Guards e Interceptors para injeção automática de tokens HTTP.
- 🎨 **Interface Moderna:** Painel 100% responsivo construído com SCSS estruturado, variáveis e componentes reutilizáveis.
- 📶 **PWA (Progressive Web App):** Aplicação configurada com Service Worker para suporte offline e instalabilidade.

---

## 🛠 Tecnologias e Ecossistema

O projeto utiliza um stack moderno para Front-end e BaaS (Backend as a Service):

- **Core & Reatividade:** Angular 20+, TypeScript 5.9, RxJS 7.8 e **Signals** (extensivamente utilizado para gerenciar estados reativos).
- **Backend & Banco de Dados:** **Firebase** (Firestore para armazenamento NoSQL em tempo real e Firebase Auth para autenticação).
- **Integrações Adicionais:** Configuração para **GraphQL** (via Apollo Client) coexistindo na arquitetura.
- **Tradução:** `@ngx-translate/core` e `@ngx-translate/http-loader`.
- **Qualidade de Código:** Husky, Lint-Staged e Prettier garantindo padronização antes de cada commit.
- **Testes:** Karma & Jest (configurados no ambiente).

---

## 📁 Arquitetura do Projeto

Nós adotamos a arquitetura **Feature First**, garantindo que a aplicação seja modular, previsível e pronta para escalar. O código reside na pasta `src/app/`:

```text
src/app/
├── core/           # O coração da aplicação (Auth, Guards, Interceptors, Tokens)
├── features/       # Módulos isolados da aplicação:
│   ├── atividades/     # Histórico de ações dos usuários
│   ├── perfil/         # Gestão do perfil do usuário logado
│   ├── simulador/      # Lógica e UI do Simulador de Crédito
│   └── solicitacoes/   # CRUD e regras de negócio de solicitações
├── shared/         # Componentes (ex: Header), pipes e diretivas reaproveitáveis
├── app.routes.ts   # Orquestração de rotas usando Lazy Loading por Componente
└── app.config.ts   # Configurações globais (i18n, Firebase, Apollo, PWA)
```

**Por que Feature First?**  
Ao invés de agrupar todos os *services* em uma pasta e todos os *components* em outra, agrupamos os arquivos pelo seu **contexto de negócio**. O serviço e o modelo de "Solicitações" vivem junto dos seus respectivos componentes, reduzindo o acoplamento global.

---

## 🧠 Modelos e Regras de Negócio

### 1. Entidade: Solicitação de Crédito
O modelo central `Solicitacao` representa um pedido de crédito feito por um cliente:
- **Propriedades:** `cliente`, `documento`, `valor`, `status`, `dataSolicitacao`, dados de auditoria (`criadoPor`, `criadoEm`).
- **Máquina de Estados (Status):** Uma solicitação transita pelos status: `pendente` ➔ `em_analise` ➔ `aprovado` ou `recusado`.
- **ViewModel:** Para evitar lógica de interface no template, o `SolicitacoesService` mapeia os dados vindos do Firebase para um `SolicitacaoViewModel`, injetando automaticamente as classes CSS e as labels de status corretas de acordo com a regra de negócio.

### 2. Rastreabilidade (Auditoria)
Qualquer mutação feita em uma solicitação (criação, atualização de status, exclusão) dispara um evento no `AtividadesService`. Esse serviço grava no Firestore um log de auditoria, garantindo que todo o histórico seja rastreável por usuário.

### 3. Simulador de Crédito (Matemática Reativa)
O módulo de Simulação utiliza `computed()` Signals para reagir instantaneamente à digitação do usuário (valor solicitado, prazo em meses e taxa de juros mensal).
O cálculo é baseado na fórmula de juros compostos / amortização:
`Valor = ValorSolicitado * ((Taxa * Fator) / (Fator - 1))` *(onde Fator = (1 + Taxa) ^ Prazo).*
Tudo recalculado em tempo real sem a necessidade de RxJS pesado ou subscrições manuais.

---

## 🚀 Como testar a aplicação na sua máquina

Preparamos um fluxo simples para você rodar o projeto localmente:

1. **Clone o repositório e instale as dependências:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Prepare o ambiente:**
   Rode o comando abaixo para gerar seu arquivo de configuração local:
   ```bash
   npm run setup:env
   ```
   > 💡 Isso vai criar um arquivo `.env.local`. Abra-o e adicione suas credenciais do Firebase. **Fique tranquilo: ele está no `.gitignore` e não subirá para o repositório!**

3. **Inicie os motores:**
   ```bash
   npm start
   ```
   Acesse no seu navegador favorito: `http://localhost:4200/`.

4. **Para rodar testes e build de produção:**
   ```bash
   npm test          # Roda todos os testes unitários
   npm run build     # Compila e gera a versão otimizada na pasta /dist
   ```

---

## 🔐 Por baixo dos panos: Variáveis de Ambiente

Para manter o projeto seguro, utilizamos um sistema dinâmico de injeção de variáveis:

- **`.env.local`** – Seu cofre pessoal para rodar local (nunca commitado).
- **`.env.example`** – Um guia com as chaves necessárias.
- **`.env.production`** – Chaves voltadas para o ambiente de produção.
- **Script:** `scripts/load-env.js` lê os `.env` e gera automaticamente o `src/environments/env.generated.ts` sempre que você roda `npm start`, `build` ou `test`.

---

## 👤 Autoria

- 👨‍💻 **Desenvolvedor:** Matheus Vilela
- 🎓 **Instituição:** FIAP (Imersão FIAP/CAIXAVERSO)
- 📝 **Licença:** MIT
