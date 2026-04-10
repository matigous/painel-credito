import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoItem } from './solicitacao-item';

describe('SolicitacaoItem', () => {
  let component: SolicitacaoItem;
  let fixture: ComponentFixture<SolicitacaoItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacaoItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
