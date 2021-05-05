import { Component, Input, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { Note } from '../models/Note';
import { PersistanceService } from '../services/persistance.service';

@Component({
  selector: 'app-modify-etu',
  templateUrl: './modify-etu.component.html',
  styleUrls: ['./modify-etu.component.css']
})
export class ModifyEtuComponent implements OnInit {

  note: Note = new Note();

  @Input() etudiant:Etudiant;

  constructor(
    private persistance: PersistanceService
  ) { 
    this.note.matiere = null;
    this.note.valeur = null;
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.note);
    if(this.note.matiere != null && this.note.valeur !=null ){
      if(this.etudiant.Notes == null){
        this.etudiant.Notes = [];
      }
      this.etudiant.Notes.push(this.note);
    }
    let etus = this.persistance.get("etus");
    etus.forEach(etu => {
      if(etu.id === this.etudiant.id){
        console.log("oui")
        etu.nom = this.etudiant.nom;
        etu.prenom = this.etudiant.prenom;
        etu.dateNaissance = this.etudiant.dateNaissance;
        etu.telephone = this.etudiant.telephone;
        etu.isBoursier = this.etudiant.isBoursier;
        etu.email = this.etudiant.email;
        etu.Notes = this.etudiant.Notes;
       
      }
    });
    this.persistance.set("etus", etus);
  }

}
