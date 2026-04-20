import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SolicitacaoViewModel } from '../../../services/graphql.service';

@Component({
  selector: 'app-solicitacao-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitacao-item.html',
  styleUrls: ['./solicitacao-item.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SolicitacaoItemComponent {
  @Input({ required: true }) solicitacao!: SolicitacaoViewModel;

  constructor(private router: Router) {}

  irParaDetalhe() {
    this.router.navigate(['/solicitacoes', this.solicitacao.id]);
  }
}
