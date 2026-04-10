import { Solicitacao } from '../models/solicitacao.model';

export const MOCK_SOLICITACOES: Solicitacao[] = [
  {
    id: 1,
    cliente: 'Maria Silva',
    documento: '123.456.789-00',
    valor: 50000,
    status: 'pendente',
    dataSolicitacao: '2025-03-15T10:30:00'
  },
  {
    id: 2,
    cliente: 'João Santos',
    documento: '987.654.321-00',
    valor: 120000,
    status: 'aprovado',
    dataSolicitacao: '2025-03-10T14:00:00'
  },
  {
    id: 3,
    cliente: 'Tech Solutions Ltda',
    documento: '12.345.678/0001-90',
    valor: 500000,
    status: 'em_analise',
    dataSolicitacao: '2025-03-20T09:15:00'
  },
  {
    id: 4,
    cliente: 'Ana Oliveira',
    documento: '456.789.123-00',
    valor: 25000,
    status: 'recusado',
    dataSolicitacao: '2025-03-08T16:45:00'
  },
  {
    id: 5,
    cliente: 'Global Imports S.A.',
    documento: '98.765.432/0001-10',
    valor: 1000000,
    status: 'pendente',
    dataSolicitacao: '2025-03-22T11:00:00'
  }
];