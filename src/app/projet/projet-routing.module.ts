import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjetsComponent } from './components/list-projets/list-projets.component';
import { ProjetComponent } from './components/projet/projet.component';

const routes: Routes = [
  { path: ':id', component: ProjetComponent },
  { path: '', component: ListProjetsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetRoutingModule {}
