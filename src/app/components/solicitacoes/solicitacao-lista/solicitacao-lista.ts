import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitacaoItemComponent } from '../solicitacao-item/solicitacao-item';
import { SolicitacoesService } from '../../../services/graphql.service';
import { HeaderComponent } from "../../shared/header/header";

@Component({
  selector: 'app-solicitacao-lista',
  standalone: true,
  imports: [CommonModule, SolicitacaoItemComponent, HeaderComponent],
  templateUrl: './solicitacao-lista.html',
  styleUrls: ['./solicitacao-lista.scss']
})
export class SolicitacaoListaComponent implements OnInit {

  constructor(public service: SolicitacoesService) {}

  ngOnInit() {
    this.service.carregarSolicitacoes();
  }
}