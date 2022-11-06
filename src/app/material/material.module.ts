import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';



@NgModule({

  exports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
