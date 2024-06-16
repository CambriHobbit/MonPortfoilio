import { Etape } from "./etape.model";

export interface Projet {
    type : string;
    id : string;
    name : string;
    subject : string;
    competenceTechnique ?: string[];
    competenceTransversal ?: string[];
    option ?: Etape[];
    keyWords ?: string[];
}