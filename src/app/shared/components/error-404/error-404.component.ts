import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error-404',
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.scss',
})
export class Error404Component {
  constructor(private location: Location) {}

  back(): void {
    this.location.back();
  }
}
