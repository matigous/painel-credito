export type StatusSolicitacao = 'pendente' | 'em_analise' | 'aprovado' | 'recusado';

export interface Solicitacao {
  id: number;
  cliente: string;
  documento: string;
  valor: number;
  status: StatusSolicitacao;
  dataSolicitacao: string;
}
