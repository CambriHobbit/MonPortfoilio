import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../../../shared/services/information/information.service';
import { Projet } from '../../../../shared/models/projet.model';

@Component({
  selector: 'app-c5',
  templateUrl: './c5.component.html',
  styleUrl: './c5.component.scss'
})
export class C5Component implements OnInit {
  constructor(private infoSer: InformationService) {}

  project!: Projet;

  ngOnInit(): void {
    this.project = this.infoSer.getProjectFromID('V');
  }
}
