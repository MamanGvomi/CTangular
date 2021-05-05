import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { DisplayEtusComponent } from './display-etus/display-etus.component';
import { ModifyEtuComponent } from './modify-etu/modify-etu.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    CreateEtudiantComponent,
    DisplayEtusComponent,
    ModifyEtuComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
