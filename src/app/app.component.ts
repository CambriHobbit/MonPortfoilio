import { Component } from '@angular/core';
import { User } from './shared/models/user.model';
import { Router } from '@angular/router';
import { InformationService } from './shared/services/information/information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';

  user!: User;

  constructor(
    private router: Router,
    private infoService: InformationService
  ) {}

  ngOnInit(): void {
    this.user = this.infoService.getUser();
  }
}
