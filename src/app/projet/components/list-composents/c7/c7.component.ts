import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../../../shared/services/information/information.service';
import { Projet } from '../../../../shared/models/projet.model';


@Component({
  selector: 'app-c7',
  templateUrl: './c7.component.html',
  styleUrl: './c7.component.scss'
})
export class C7Component implements OnInit {
  constructor(private infoSer: InformationService) {}

  project!: Projet;

  ngOnInit(): void {
    this.project = this.infoSer.getProjectFromID('VII');
  }
}
