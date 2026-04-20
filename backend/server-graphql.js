const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

app.use(cors());

let solicitacoes = [
  { id: 1, cliente: 'Bucky Barnes', documento: '101.202.303-44', valor: 4500, status: 'pendente', dataSolicitacao: '2026-04-01T10:00:00' },
  { id: 2, cliente: 'Carol Danvers', documento: '909.808.707-66', valor: 150000, status: 'aprovado', dataSolicitacao: '2026-04-02T14:30:00' },
  { id: 3, cliente: 'Sheldon Cooper', documento: '111.222.333-44', valor: 25000, status: 'aprovado', dataSolicitacao: '2026-04-03T09:15:00' },
  { id: 4, cliente: 'Rachel Green', documento: '555.666.777-88', valor: 8500, status: 'pendente', dataSolicitacao: '2026-04-05T16:30:00' },
  { id: 5, cliente: 'Barney Stinson', documento: '000.000.001-01', valor: 99999, status: 'aprovado', dataSolicitacao: '2026-04-06T22:00:00' },
  { id: 6, cliente: 'Penny Hofstadter', documento: '444.555.666-77', valor: 1200, status: 'recusado', dataSolicitacao: '2026-04-07T11:20:00' },
  { id: 7, cliente: 'Chandler Bing', documento: '222.333.444-55', valor: 15000, status: 'aprovado', dataSolicitacao: '2026-04-08T13:45:00' },
  { id: 8, cliente: 'Robin Scherbatsky', documento: '888.777.666-55', valor: 7200, status: 'pendente', dataSolicitacao: '2026-04-09T10:10:00' },
  { id: 9, cliente: 'Joey Tribbiani', documento: '333.222.111-00', valor: 450, status: 'recusado', dataSolicitacao: '2026-04-10T15:00:00' },
  { id: 10, cliente: 'Ted Mosby', documento: '999.888.777-66', valor: 18000, status: 'pendente', dataSolicitacao: '2026-04-11T08:00:00' },
  { id: 11, cliente: 'Walter White', documento: '123.456.789-10', valor: 500000, status: 'aprovado', dataSolicitacao: '2026-04-12T14:20:00' },
  { id: 12, cliente: 'Jesse Pinkman', documento: '987.654.321-00', valor: 1500, status: 'pendente', dataSolicitacao: '2026-04-12T15:30:00' },
  { id: 13, cliente: 'Tony Stark', documento: '000.000.000-01', valor: 1000000, status: 'aprovado', dataSolicitacao: '2026-04-13T10:00:00' },
  { id: 14, cliente: 'Steve Rogers', documento: '191.819.181-00', valor: 2000, status: 'aprovado', dataSolicitacao: '2026-04-13T11:00:00' },
  { id: 15, cliente: 'Monica Geller', documento: '111.111.111-11', valor: 12500, status: 'aprovado', dataSolicitacao: '2026-04-14T09:00:00' },
  { id: 16, cliente: 'Phoebe Buffay', documento: '222.222.222-22', valor: 3000, status: 'pendente', dataSolicitacao: '2026-04-14T12:00:00' },
  { id: 17, cliente: 'Leonard Hofstadter', documento: '333.333.333-33', valor: 22000, status: 'aprovado', dataSolicitacao: '2026-04-15T14:00:00' },
  { id: 18, cliente: 'Howard Wolowitz', documento: '444.444.444-44', valor: 19000, status: 'aprovado', dataSolicitacao: '2026-04-15T16:45:00' },
  { id: 19, cliente: 'Raj Koothrappali', documento: '555.555.555-55', valor: 45000, status: 'pendente', dataSolicitacao: '2026-04-16T10:30:00' },
  { id: 20, cliente: 'Bernadette Rostenkowski', documento: '666.666.666-66', valor: 35000, status: 'aprovado', dataSolicitacao: '2026-04-16T11:20:00' },
  { id: 21, cliente: 'Amy Farrah Fowler', documento: '777.777.777-77', valor: 28000, status: 'aprovado', dataSolicitacao: '2026-04-17T08:15:00' },
  { id: 22, cliente: 'Lily Aldrin', documento: '888.888.888-88', valor: 5400, status: 'recusado', dataSolicitacao: '2026-04-17T13:10:00' },
  { id: 23, cliente: 'Marshall Eriksen', documento: '999.999.999-99', valor: 17000, status: 'aprovado', dataSolicitacao: '2026-04-18T09:40:00' },
  { id: 24, cliente: 'Skyler White', documento: '101.101.101-01', valor: 85000, status: 'aprovado', dataSolicitacao: '2026-04-18T15:00:00' },
  { id: 25, cliente: 'Saul Goodman', documento: '202.202.202-02', valor: 12000, status: 'aprovado', dataSolicitacao: '2026-04-19T17:30:00' },
  { id: 26, cliente: 'Gustavo Fring', documento: '303.303.303-03', valor: 90000, status: 'aprovado', dataSolicitacao: '2026-04-19T18:00:00' },
  { id: 27, cliente: 'Mike Ehrmantraut', documento: '404.404.404-04', valor: 15000, status: 'aprovado', dataSolicitacao: '2026-04-20T06:00:00' },
  { id: 28, cliente: 'Hank Schrader', documento: '505.505.505-05', valor: 7000, status: 'pendente', dataSolicitacao: '2026-04-20T09:00:00' },
  { id: 29, cliente: 'Natasha Romanoff', documento: '606.606.606-06', valor: 11000, status: 'aprovado', dataSolicitacao: '2026-04-21T10:00:00' },
  { id: 30, cliente: 'Bruce Banner', documento: '707.070.707-07', valor: 5500, status: 'pendente', dataSolicitacao: '2026-04-21T11:00:00' },
  { id: 31, cliente: 'Thor Odinson', documento: '808.808.808-08', valor: 88000, status: 'aprovado', dataSolicitacao: '2026-04-22T12:00:00' },
  { id: 32, cliente: 'Clint Barton', documento: '909.909.909-09', valor: 4200, status: 'aprovado', dataSolicitacao: '2026-04-22T14:00:00' },
  { id: 33, cliente: 'Peter Parker', documento: '121.212.121-21', valor: 500, status: 'recusado', dataSolicitacao: '2026-04-23T16:00:00' },
  { id: 34, cliente: 'Wanda Maximoff', documento: '313.313.313-31', valor: 13000, status: 'pendente', dataSolicitacao: '2026-04-23T17:00:00' },
  { id: 35, cliente: 'Vision', documento: '414.414.414-41', valor: 25000, status: 'aprovado', dataSolicitacao: '2026-04-24T08:00:00' },
  { id: 36, cliente: 'Stephen Strange', documento: '515.515.515-51', valor: 60000, status: 'aprovado', dataSolicitacao: '2026-04-24T10:00:00' },
  { id: 37, cliente: 'T-Challa', documento: '616.616.616-61', valor: 999999, status: 'aprovado', dataSolicitacao: '2026-04-25T11:00:00' },
  { id: 38, cliente: 'Sam Wilson', documento: '717.717.717-71', valor: 3500, status: 'pendente', dataSolicitacao: '2026-04-25T12:00:00' },
  { id: 39, cliente: 'Bucky Barnes 2', documento: '818.818.818-81', valor: 2800, status: 'aprovado', dataSolicitacao: '2026-04-26T09:00:00' },
  { id: 40, cliente: 'Loki Laufeyson', documento: '919.919.919-91', valor: 0, status: 'recusado', dataSolicitacao: '2026-04-26T14:30:00' },
  { id: 41, cliente: 'Scott Lang', documento: '020.202.020-20', valor: 1500, status: 'pendente', dataSolicitacao: '2026-04-27T10:15:00' },
  { id: 42, cliente: 'Hope van Dyne', documento: '131.313.131-31', valor: 45000, status: 'aprovado', dataSolicitacao: '2026-04-27T11:45:00' },
  { id: 43, cliente: 'Nick Fury', documento: '242.424.242-42', valor: 10000, status: 'aprovado', dataSolicitacao: '2026-04-28T08:00:00' },
  { id: 44, cliente: 'Maria Hill', documento: '353.535.353-53', valor: 8000, status: 'aprovado', dataSolicitacao: '2026-04-28T09:30:00' },
  { id: 45, cliente: 'Gunther CentralPerk', documento: '464.646.464-64', valor: 1200, status: 'pendente', dataSolicitacao: '2026-04-29T16:00:00' },
  { id: 46, cliente: 'Janice Litman', documento: '575.757.575-57', valor: 4000, status: 'recusado', dataSolicitacao: '2026-04-29T17:15:00' },
  { id: 47, cliente: 'Stuart Bloom', documento: '686.868.686-68', valor: 300, status: 'pendente', dataSolicitacao: '2026-04-30T10:00:00' },
  { id: 48, cliente: 'Wil Wheaton', documento: '797.979.797-79', valor: 15000, status: 'aprovado', dataSolicitacao: '2026-04-30T13:00:00' },
  { id: 49, cliente: 'Ranjit Singh', documento: '808.101.808-11', valor: 5000, status: 'aprovado', dataSolicitacao: '2026-05-01T07:00:00' },
  { id: 50, cliente: 'James McGill', documento: '919.212.919-22', valor: 2500, status: 'pendente', dataSolicitacao: '2026-05-01T15:45:00' }
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
