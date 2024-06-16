import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjetsComponent } from './components/list-projets/list-projets.component';

const routes: Routes = [{ path: '', component: ListProjetsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetRoutingModule {}
