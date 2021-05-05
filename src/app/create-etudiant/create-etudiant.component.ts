import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { PersistanceService } from '../services/persistance.service';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.css']
})
export class CreateEtudiantComponent implements OnInit {

  public etudiant:Etudiant = new Etudiant();

  constructor(
    private persistance: PersistanceService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.etudiant);
    let etudiants: Etudiant[] = this.persistance.get("etus"); 
    if( etudiants.length == 0){
      this.etudiant.id = 1;
    }else{

      this.etudiant.id = etudiants[etudiants.length - 1].id + 1;
    }
    this.etudiant.Notes = [];
    this.etudiant.moyenne = this.etudiant.getMoyenne(this.etudiant);
    etudiants.push(this.etudiant);
    this.persistance.set("etus", etudiants);
    console.log(this.persistance.get("etus"));

  }

}
