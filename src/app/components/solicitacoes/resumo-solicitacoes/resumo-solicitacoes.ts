import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitacaoViewModel } from '../../../services/graphql.service';

@Component({
  selector: 'app-resumo-solicitacoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumo-solicitacoes.html',
  styleUrl: './resumo-solicitacoes.scss',
})
export class ResumoSolicitacoesComponent {
  lista = input<SolicitacaoViewModel[]>([]);

  resumo = computed(() => {
    const dados = this.lista();

    return {
      total: dados.length,
      aprovadas: dados.filter((i) => i.status === 'aprovado').length,
      pendentes: dados.filter((i) => i.status === 'pendente').length,
      recusadas: dados.filter((i) => i.status === 'recusado').length,
    };
  });
}
