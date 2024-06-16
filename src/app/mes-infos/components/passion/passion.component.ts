import { Component, Input } from '@angular/core';
import { Passion } from '../../../shared/models/passion.model';

@Component({
  selector: 'app-passion',
  templateUrl: './passion.component.html',
  styleUrl: './passion.component.scss',
})
export class PassionComponent {
  @Input() passion!: Passion;
}
