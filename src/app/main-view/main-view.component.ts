import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { PersistanceService } from '../services/persistance.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  private listeEtus: Etudiant[];

  constructor(
    private persistance: PersistanceService
  ) { }

  ngOnInit(): void {
    this.listeEtus = this.persistance.get("etus");
    if( this.listeEtus == null){
      this.persistance.set("etus", []);    
    }
  }

}
