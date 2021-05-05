import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { PersistanceService } from '../services/persistance.service';

@Component({
  selector: 'app-display-etus',
  templateUrl: './display-etus.component.html',
  styleUrls: ['./display-etus.component.css']
})
export class DisplayEtusComponent implements OnInit {

  selectedEtu: Etudiant = null;
  detailedEtu: Etudiant = null;

  constructor(
    public persistance: PersistanceService
  ) { }

  ngOnInit(): void {
    this.selectedEtu = null;
  }

  getMoyenne(etu:Etudiant){
    let res:number = 0;
    etu.Notes.forEach(note => {
        res+= note.valeur;
    });
    res = res/etu.Notes.length;
    return res;
  }

  onDetail(etu:Etudiant){
    console.log(etu);
    this.detailedEtu = etu;
    this.selectedEtu = null;

  }

  inListe(liste:Etudiant[], elem:Etudiant):boolean{
    liste.forEach(element => {
      if(elem.id == element.id){
        return true;
      }
    });
    return false;
  }

  onMoyenne(){

    console.log("Non implémanter : pas réussi (voir code onMoyenne")
    // let res:Etudiant[] = []
    // let min:number = 21;
    // let minElem: number = null;
    // let allEtu: Etudiant[] = this.persistance.get("etus");
    // while( allEtu.length > 0 ){
    //   for (let index = 0; index < allEtu.length; index++) {
    //     const element = allEtu[index];
    //     if (this.getMoyenne(element) <= min){
    //       min = this.getMoyenne(element);
    //       minElem = index;
    //     }
              
    //   }
    //   res.push(allEtu[minElem]);
    //   allEtu.splice(minElem, 1);
    // }
    // this.persistance.set("etus", res);
  }

  onDelete(etu:Etudiant){
    console.log("Delete : ", etu);
    let listeEtus:Etudiant[] = this.persistance.get("etus");
    let nouvelleListe:Etudiant []= [];
    listeEtus.forEach(etuL => {
      if(etu.id != etuL.id){
        nouvelleListe.push(etuL);
      }
    }); 
    this.persistance.set("etus", nouvelleListe);
    if( this.selectedEtu != null && this.selectedEtu.id == etu.id){
      this.selectedEtu == null;
    }
    if( this.detailedEtu != null && this.detailedEtu.id == etu.id){
      this.detailedEtu == null;
    }
  }
  onEtudiant(etu:Etudiant){
    console.log(etu);
    this.selectedEtu = etu;
    
  }
}
