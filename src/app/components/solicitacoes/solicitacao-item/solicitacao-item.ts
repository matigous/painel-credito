import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Solicitacao } from '../../../models/solicitacao.model';

@Component({
  selector: 'app-solicitacao-item',
  imports: [CommonModule],
  templateUrl: './solicitacao-item.html',
  styleUrl: './solicitacao-item.scss'
})
export class SolicitacaoItemComponent {
  @Input({ required: true }) solicitacao!: Solicitacao;

  get statusClass(): string {
    const classMap: Record<string, string> = {
      pendente: 'status--pendente',
      em_analise: 'status--analise',
      aprovado: 'status--aprovado',
      recusado: 'status--recusado'
    };
    return classMap[this.solicitacao.status] ?? '';
  }

  get statusLabel(): string {
    const labelMap: Record<string, string> = {
      pendente: 'Pendente',
      em_analise: 'Em Análise',
      aprovado: 'Aprovado',
      recusado: 'Recusado'
    };
    return labelMap[this.solicitacao.status] ?? this.solicitacao.status;
  }
}