import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Projet } from '../../../shared/models/projet.model';

@Component({
  selector: 'app-short-projet',
  templateUrl: './short-projet.component.html',
  styleUrl: './short-projet.component.scss',
})
export class ShortProjetComponent implements OnInit {
  @Input() project!: Projet;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  substring(string: string): string {
    let splitString = string.split(' ');
    if (splitString.length > 10) {
      let i: number = 0;
      let newString: string = '';
      splitString.forEach((ele) => {
        if (i < 10) {
          newString += ele + ' ';
          i++;
        }
      });
      return (newString += '...');
    }
    return string;
  }
}
