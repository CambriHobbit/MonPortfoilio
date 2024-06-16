import { Component } from '@angular/core';
import { Projet } from '../../../shared/models/projet.model';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationService } from '../../../shared/services/information/information.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.scss',
})
export class ProjetComponent {
  project!: Projet;

  constructor(
    private infoService: InformationService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}
  ngOnInit(): void {
    const projectId = this.route.snapshot.params['id'];
    try {
      this.project = this.infoService.getProjectFromID(projectId);
    } catch (e) {
      this.router.navigateByUrl('error-404');
    }
  }

  goBack(): void {
    this.location.back();
  }
}
