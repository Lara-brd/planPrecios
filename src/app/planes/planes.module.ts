import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanesCardsComponent } from './planes-cards/planes-cards.component';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    PlanesCardsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    PlanesCardsComponent
  ]
})
export class PlanesModule { }
