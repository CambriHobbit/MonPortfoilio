import { Component, Input } from '@angular/core';
import { Etape } from '../../../shared/models/etape.model';

@Component({
  selector: 'app-etape',
  templateUrl: './etape.component.html',
  styleUrl: './etape.component.scss',
})
export class EtapeComponent {
  @Input() etape!: Etape;
}
