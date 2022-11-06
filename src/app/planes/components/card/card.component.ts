import { Component, Input, OnInit } from '@angular/core';
import { ProductDetail } from '../../interfaces/product-detail.interface';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{


  @Input() productDetails!:ProductDetail;


  services:string[]=[

      'Full courses library',
      'A new daily meditation',
      'Access to the meditation guru',
      'Sleep podcasts and exercices',
      'Mindfulness exercices',
      'Guided meditations',
      'Cooking recipes'
  ];

availableServices:string[]=[];
notAvailableServices:string[]=[];


  constructor(){
  }


  ngOnInit(): void {
    
    this.availableServices = this.services.slice(0, this.productDetails.available!);
    this.notAvailableServices = this.services.slice(this.productDetails.available!);
    
  }



  getBtnStyle(){
    if(this.productDetails.plan === 'Starter'){
      return 'btnOutline'
    }else if(this.productDetails.plan === 'Pro'){
      return 'btn'
    }else{
      return 'btnSecond'
    }
  }

  getClassList(){
    
  }

}
