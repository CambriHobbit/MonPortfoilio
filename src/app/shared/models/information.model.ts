import { Passion } from './passion.model';

export interface InformationsUser {
  git: string;
  mail: string;
  image: string;
  phone: string;
  age: number;
  mesPassion: Passion[];
  mesOuvragePref: string[];
  mesPeinturePref: string[];
  mesDesignPatterPref: string[];
  monHistoire: string;
  situation: string;
}
