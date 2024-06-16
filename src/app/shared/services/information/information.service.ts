import { Injectable } from '@angular/core';
import * as info from '../../../../assets/data/data.json';
import { User } from '../../models/user.model';
import { Projet } from '../../models/projet.model';
import { InformationsUser } from '../../models/information.model';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
  private user: User = info;

  getUser(): User {
    return this.user;
  }

  private getListProject(): Projet[] {
    return this.user.projects;
  }

  getInformations(): InformationsUser {
    return this.user.information;
  }

  getProjectFromID(idProject: string): Projet {
    let projet = this.getListProject().find((projet: Projet) => {
      return projet.id == idProject;
    });
    if (projet == undefined) {
      throw Error('Not in');
    }
    return projet;
  }

  getProjectFromType(type: string): Projet[] {
    return this.getListProject().filter((project) => {
      return project.type == type;
    });
  }
}
