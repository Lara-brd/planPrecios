import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from './error-state-matcher';



@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styles:[`
  .example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}
`]
})


export class DialogBoxComponent {


    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
    matcher = new MyErrorStateMatcher();

  

}
