import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busca-solicitacoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './busca-solicitacoes.html',
  styleUrl: './busca-solicitacoes.scss',
})
export class BuscaSolicitacoesComponent {
  @Output() buscaChange = new EventEmitter<string>();

  onChange(event: any) {
    this.buscaChange.emit(event.target.value);
  }
}
