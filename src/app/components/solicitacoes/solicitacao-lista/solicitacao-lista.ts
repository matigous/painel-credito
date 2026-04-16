import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SolicitacaoItemComponent } from '../solicitacao-item/solicitacao-item';
import { SolicitacoesService, SolicitacaoViewModel } from '../../../services/graphql.service';
import { HeaderComponent } from "../../shared/header/header";

@Component({
  selector: 'app-solicitacao-lista',
  standalone: true,
  imports: [CommonModule, SolicitacaoItemComponent, HeaderComponent, ScrollingModule],
  templateUrl: './solicitacao-lista.html',
  styleUrls: ['./solicitacao-lista.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitacaoListaComponent implements OnInit {

  constructor(public service: SolicitacoesService) { }

  ngOnInit() {
    this.service.carregarSolicitacoes();
  }

  trackById(index: number, item: SolicitacaoViewModel) {
    return item.id;
  }
}
