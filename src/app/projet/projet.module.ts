import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetRoutingModule } from './projet-routing.module';
import { ListProjetsComponent } from './components/list-projets/list-projets.component';
import { ShortProjetComponent } from './components/short-projet/short-projet.component';
import { ProjetComponent } from './components/projet/projet.component';
import { EtapeComponent } from './components/etape/etape.component';
import { C1Component } from './components/list-composents/c1/c1.component';
import { C2Component } from './components/list-composents/c2/c2.component';
import { C3Component } from './components/list-composents/c3/c3.component';
import { C4Component } from './components/list-composents/c4/c4.component';
import { C5Component } from './components/list-composents/c5/c5.component';
import { C6Component } from './components/list-composents/c6/c6.component';
import { C7Component } from './components/list-composents/c7/c7.component';
import { C8Component } from './components/list-composents/c8/c8.component';
import { C9Component } from './components/list-composents/c9/c9.component';


@NgModule({
  declarations: [
    ListProjetsComponent,
    ShortProjetComponent,
    ProjetComponent,
    EtapeComponent,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    C5Component,
    C6Component,
    C7Component,
    C8Component,
    C9Component
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule
  ]
})
export class ProjetModule { }
