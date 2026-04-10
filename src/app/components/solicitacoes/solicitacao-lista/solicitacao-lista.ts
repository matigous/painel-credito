import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Solicitacao } from '../../../models/solicitacao.model';
import { SolicitacaoItemComponent } from '../solicitacao-item/solicitacao-item';
import { MOCK_SOLICITACOES } from '../../../mocks/solicitacoes.mock';

@Component({
  selector: 'app-solicitacao-lista',
  imports: [CommonModule, SolicitacaoItemComponent],
  templateUrl: './solicitacao-lista.html',
  styleUrl: './solicitacao-lista.scss'
})
export class SolicitacaoListaComponent implements OnInit {
  solicitacoes: Solicitacao[] = [];
  isLoading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.solicitacoes = MOCK_SOLICITACOES;
      this.isLoading = false;
    }, 1500);
  }
}