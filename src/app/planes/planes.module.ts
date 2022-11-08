import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanesCardsComponent } from './planes-cards/planes-cards.component';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '../material/material.module';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlanesCardsComponent,
    CardComponent,
    DialogBoxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    PlanesCardsComponent
  ]
})
export class PlanesModule { }
