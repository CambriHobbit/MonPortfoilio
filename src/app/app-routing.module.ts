import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/components/error-404/error-404.component';

const routes: Routes = [
  {
    path: 'projet',
    loadChildren: () =>
      import('./projet/projet.module').then((m) => m.ProjetModule),
  },
  {
    path: 'mes-infos',
    loadChildren: () =>
      import('./mes-infos/mes-infos.module').then((m) => m.MesInfosModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'error-404', component: Error404Component },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
