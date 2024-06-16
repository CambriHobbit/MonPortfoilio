import { Component, OnInit } from '@angular/core';
import { Projet } from '../../../shared/models/projet.model';
import { InformationService } from '../../../shared/services/information/information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-projets',
  templateUrl: './list-projets.component.html',
  styleUrl: './list-projets.component.scss',
})
export class ListProjetsComponent implements OnInit {
  keyWord!: string;
  projectsUniv!: Projet[];
  projectsPerso!: Projet[];
  projectsPro!: Projet[];

  constructor(
    private infoService: InformationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectsUniv = this.infoService.getProjectFromType('univ');
    this.projectsPerso = this.infoService.getProjectFromType('perso');
    this.projectsPro = this.infoService.getProjectFromType('pro');
  }
}
