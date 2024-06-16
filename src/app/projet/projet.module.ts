import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetRoutingModule } from './projet-routing.module';
import { ListProjetsComponent } from './components/list-projets/list-projets.component';
import { ShortProjetComponent } from './components/short-projet/short-projet.component';
import { ProjetComponent } from './components/projet/projet.component';
import { EtapeComponent } from './components/etape/etape.component';


@NgModule({
  declarations: [
    ListProjetsComponent,
    ShortProjetComponent,
    ProjetComponent,
    EtapeComponent
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule
  ]
})
export class ProjetModule { }
