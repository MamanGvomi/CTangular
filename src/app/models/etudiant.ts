import { Note } from "./Note";

export class Etudiant{
    id:number;
    nom:string;
    prenom:string; 
    dateNaissance:string;
    telephone:string;
    email:string;
    isBoursier:boolean;
    Notes:Note[];
    moyenne:number;

    public getMoyenne(etu:Etudiant):number{
        let res:number = 0;
        etu.Notes.forEach(note => {
            res+= note.valeur;
        });
        res = res/etu.Notes.length;
        return res;
    }
}
