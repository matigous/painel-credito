import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filtro-solicitacoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filtro-solicitacoes.html',
  styleUrl: './filtro-solicitacoes.scss',
})
export class FiltroSolicitacoesComponent {
  @Output() filtroChange = new EventEmitter<string>();

  selecionar(status: string) {
    this.filtroChange.emit(status);
  }
}
