import { Injectable, signal } from '@angular/core';
import { Solicitacao } from '../models/solicitacao.model';
import { MOCK_SOLICITACOES } from '../mocks/solicitacoes.mock';

export interface SolicitacaoViewModel extends Solicitacao {
  statusClass: string;
  statusLabel: string;
}

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {

  solicitacoes = signal<SolicitacaoViewModel[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  carregarSolicitacoes() {
    this.loading.set(true);
    this.error.set(null);

    setTimeout(() => {
      try {
        const data = MOCK_SOLICITACOES.map(s => this.mapToViewModel(s));
        this.solicitacoes.set(data);
      } catch {
        this.error.set('Erro ao carregar dados');
      } finally {
        this.loading.set(false);
      }
    }, 1000);
  }

  private mapToViewModel(s: Solicitacao): SolicitacaoViewModel {
    const status = s.status.toLowerCase();

    const classMap: Record<string, string> = {
      pendente: 'card__status--pendente',
      em_analise: 'card__status--analise',
      aprovado: 'card__status--aprovado',
      recusado: 'card__status--recusado'
    };

    const labelMap: Record<string, string> = {
      pendente: 'Pendente',
      em_analise: 'Em Análise',
      aprovado: 'Aprovado',
      recusado: 'Recusado'
    };

    return {
      ...s,
      statusClass: classMap[status] ?? '',
      statusLabel: labelMap[status] ?? s.status
    };
  }
}