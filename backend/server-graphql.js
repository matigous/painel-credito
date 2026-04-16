const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

app.use(cors());

let solicitacoes = [
  {
    id: 1,
    cliente: 'Sheldon Cooper',
    documento: '111.222.333-44',
    valor: 25000,
    status: 'aprovado',
    dataSolicitacao: '2026-04-03T09:15:00'
  },
  {
    id: 2,
    cliente: 'Rachel Green',
    documento: '555.666.777-88',
    valor: 8500,
    status: 'pendente',
    dataSolicitacao: '2026-04-05T16:30:00'
  },
  {
    id: 3,
    cliente: 'Barney Stinson',
    documento: '000.000.001-01',
    valor: 99999,
    status: 'aprovado',
    dataSolicitacao: '2026-04-06T22:00:00'
  },
  {
    id: 4,
    cliente: 'Penny Hofstadter',
    documento: '444.555.666-77',
    valor: 1200,
    status: 'reprovado',
    dataSolicitacao: '2026-04-07T11:20:00'
  },
  {
    id: 5,
    cliente: 'Chandler Bing',
    documento: '222.333.444-55',
    valor: 15000,
    status: 'aprovado',
    dataSolicitacao: '2026-04-08T13:45:00'
  },
  {
    id: 6,
    cliente: 'Robin Scherbatsky',
    documento: '888.777.666-55',
    valor: 7200,
    status: 'pendente',
    dataSolicitacao: '2026-04-09T10:10:00'
  },
  {
    id: 7,
    cliente: 'Joey Tribbiani',
    documento: '333.222.111-00',
    valor: 450,
    status: 'reprovado',
    dataSolicitacao: '2026-04-10T15:00:00'
  },
  {
    id: 8,
    cliente: 'Ted Mosby',
    documento: '999.888.777-66',
    valor: 18000,
    status: 'pendente',
    dataSolicitacao: '2026-04-11T08:00:00'
  }
];

const schema = buildSchema(`
  type Solicitacao {
    id: ID
    cliente: String
    documento: String
    valor: Float
    status: String
    dataSolicitacao: String
  }

  type Query {
    solicitacoes: [Solicitacao]
  }

  type Mutation {
    criarSolicitacao(
      cliente: String
      documento: String
      valor: Float
      status: String
      dataSolicitacao: String
    ): Solicitacao

    atualizarStatus(
      id: ID
      status: String
    ): Solicitacao

    removerSolicitacao(
      id: ID
    ): Solicitacao
  }
`);

const root = {

  solicitacoes: () => solicitacoes,

  criarSolicitacao: ({ cliente, documento, valor, status, dataSolicitacao }) => {
    const nova = {
      id: Date.now().toString(),
      cliente,
      documento,
      valor,
      status,
      dataSolicitacao
    };

    solicitacoes.push(nova);
    return nova;
  },

  atualizarStatus: ({ id, status }) => {
    const item = solicitacoes.find(s => String(s.id) === String(id));

    if (!item) {
      throw new Error('Solicitação não encontrada');
    }

    item.status = status;
    return item;
  },

  removerSolicitacao: ({ id }) => {
    const index = solicitacoes.findIndex(s => String(s.id) === String(id));

    if (index === -1) {
      throw new Error('Solicitação não encontrada');
    }

    const removida = solicitacoes[index];
    solicitacoes.splice(index, 1);

    return removida;
  }
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('GraphQL rodando em http://localhost:4000/graphql');
});
