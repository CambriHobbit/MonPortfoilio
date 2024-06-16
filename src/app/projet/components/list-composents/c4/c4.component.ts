import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../../../shared/services/information/information.service';
import { Projet } from '../../../../shared/models/projet.model';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrl: './c4.component.scss',
})
export class C4Component implements OnInit {
  constructor(private infoSer: InformationService) {}

  project!: Projet;

  ngOnInit(): void {
    this.project = this.infoSer.getProjectFromID('IV');
  }
}
