import { Component, OnInit } from '@angular/core';
import { Projet } from '../../../../shared/models/projet.model';
import { InformationService } from '../../../../shared/services/information/information.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.scss'
})
export class C1Component implements OnInit{

  constructor(private infoSer : InformationService){

  }

  project !: Projet;

  ngOnInit(): void {
      this.project = this.infoSer.getProjectFromID("I");
  }

}
