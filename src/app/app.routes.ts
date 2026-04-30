import { Routes } from '@angular/router';

import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login/login').then((m) => m.LoginComponent),
  },
  {
    path: 'solicitacoes',
    loadComponent: () =>
      import('./features/solicitacoes/components/solicitacao-lista/solicitacao-lista').then(
        (m) => m.SolicitacaoListaComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'solicitacoes/nova',
    loadComponent: () =>
      import('./features/solicitacoes/components/solicitacao-form/solicitacao-form').then(
        (m) => m.SolicitacaoFormComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'solicitacoes/editar/:id',
    loadComponent: () =>
      import('./features/solicitacoes/components/solicitacao-form/solicitacao-form').then(
        (m) => m.SolicitacaoFormComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'simulador',
    loadComponent: () =>
      import('./features/simulador/components/simulador-credito/simulador-credito').then(
        (m) => m.SimuladorCreditoComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'perfil',
    loadComponent: () =>
      import('./features/perfil/components/perfil-usuario/perfil-usuario').then(
        (m) => m.PerfilUsuarioComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'atividades',
    loadComponent: () =>
      import('./features/atividades/components/atividades-lista/atividades-lista').then(
        (m) => m.AtividadesListaComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'solicitacoes/:id',
    loadComponent: () =>
      import('./features/solicitacoes/components/solicitacao-detalhe/solicitacao-detalhe').then(
        (m) => m.SolicitacaoDetalheComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
