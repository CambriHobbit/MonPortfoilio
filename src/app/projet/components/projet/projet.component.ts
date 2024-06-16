import { Component, Input } from '@angular/core';
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
  @Input() project!: Projet;
}
