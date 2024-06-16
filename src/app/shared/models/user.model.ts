import { InformationsUser } from "./information.model";
import { Projet } from "./projet.model";

export interface User{
    firstName : string
    lastName : string;
    information : InformationsUser ;
    projects : Projet[];
}