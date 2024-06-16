import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../../../shared/services/information/information.service';
import { Projet } from '../../../../shared/models/projet.model';

@Component({
  selector: 'app-c8',
  templateUrl: './c8.component.html',
  styleUrl: './c8.component.scss',
})
export class C8Component implements OnInit {
  constructor(private infoSer: InformationService) {}

  project!: Projet;

  ngOnInit(): void {
    this.project = this.infoSer.getProjectFromID('VIII');
  }
}
