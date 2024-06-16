import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjetsComponent } from './components/list-projets/list-projets.component';
import { ProjetComponent } from './components/projet/projet.component';
import { C1Component } from './components/list-composents/c1/c1.component';
import { C2Component } from './components/list-composents/c2/c2.component';
import { C3Component } from './components/list-composents/c3/c3.component';
import { C4Component } from './components/list-composents/c4/c4.component';
import { C5Component } from './components/list-composents/c5/c5.component';
import { C6Component } from './components/list-composents/c6/c6.component';
import { C7Component } from './components/list-composents/c7/c7.component';
import { C8Component } from './components/list-composents/c8/c8.component';
import { C9Component } from './components/list-composents/c9/c9.component';

const routes: Routes = [
  { path: 'I', component: C1Component },
  { path: 'II', component: C2Component },
  { path: 'III', component: C3Component },
  { path: 'IV', component: C4Component },
  { path: 'V', component: C5Component },
  { path: 'VI', component: C6Component },
  { path: 'VII', component: C7Component },
  { path: 'VIII', component: C8Component },
  { path: 'IX', component: C9Component },
  { path: '', component: ListProjetsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetRoutingModule {}
