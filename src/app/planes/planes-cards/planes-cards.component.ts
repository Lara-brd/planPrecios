import { Component, OnInit } from '@angular/core';
import { ProductDetail } from '../interfaces/product-detail.interface';

@Component({
  selector: 'app-planes-cards',
  templateUrl: './planes-cards.component.html',
  styles: []
})
export class PlanesCardsComponent implements OnInit {



  //Información para card STARTER

  productDetailsStarter:ProductDetail = {
    image:"../assets/img/image.png",
    plan:'Starter',
    price:'Free',
    //servicios disponibles
    available:3,
    btnText:'Get Started'

  }



  //iformación para card PRO

  productDetailsPro:ProductDetail = {
    image:"../assets/img/image-1.png",
    plan:'Pro',
    price:'$49',
    available:5,
    btnText:'Become a Pro'

  }



  //iformación para card TEAMS

  productDetailsTeams:ProductDetail = {
    image:"../assets/img/image-3.png",
    plan:'Teams',
    price:'$99',
    available:7,
    btnText:'Get Teams'

  }


  constructor() { }

  ngOnInit(): void {
  }

}
