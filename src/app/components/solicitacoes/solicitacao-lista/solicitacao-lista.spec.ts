import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoLista } from './solicitacao-lista';

describe('SolicitacaoLista', () => {
  let component: SolicitacaoLista;
  let fixture: ComponentFixture<SolicitacaoLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacaoLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
