import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { InformationService } from '../../../shared/services/information/information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  user!: User;

  constructor(private infoServices: InformationService) {}

  ngOnInit(): void {
    this.user = this.infoServices.getUser();
  }
}
