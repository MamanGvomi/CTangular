import { Component, Input, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  @Input() etudiant:Etudiant
  constructor() { }

  ngOnInit(): void {
  }

  getMoyenne(etu:Etudiant){
    let res:number = 0;
    etu.Notes.forEach(note => {
        res+= note.valeur;
    });
    res = res/etu.Notes.length;
    return res;
  }
}
