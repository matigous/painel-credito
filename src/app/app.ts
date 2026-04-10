import { Component } from '@angular/core';
import { SolicitacaoListaComponent } from './components/solicitacoes/solicitacao-lista/solicitacao-lista';

@Component({
  selector: 'app-root',
  imports: [SolicitacaoListaComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'Painel de Solicitações de Crédito';
}