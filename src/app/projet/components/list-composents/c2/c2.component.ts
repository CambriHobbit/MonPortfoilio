import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../../../shared/services/information/information.service';
import { Projet } from '../../../../shared/models/projet.model';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.scss',
})
export class C2Component implements OnInit {
  constructor(private infoSer: InformationService) {}

  project!: Projet;

  ngOnInit(): void {
    this.project = this.infoSer.getProjectFromID('II');
  }
}
