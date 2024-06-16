import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../../../shared/services/information/information.service';
import { Projet } from '../../../../shared/models/projet.model';

@Component({
  selector: 'app-c6',
  templateUrl: './c6.component.html',
  styleUrl: './c6.component.scss',
})
export class C6Component implements OnInit {
  constructor(private infoSer: InformationService) {}

  project!: Projet;

  ngOnInit(): void {
    this.project = this.infoSer.getProjectFromID('VI');
  }
}
