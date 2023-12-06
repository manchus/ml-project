import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css'],
})
export class DetailProduitComponent implements OnInit {
  content = 'Écrire ici';
  texte = 'OFF';
  bloquer = true;
  ecrire = true;
  adm = false;

  voitures = [
    {
      title: 'Corvette',
      category: 'voiture',
      sold: true,
    },
    {
      title: 'Caravan',
      category: 'camion',
      sold: false,
    },

    {
      title: 'Focus',
      category: 'voiture',
      sold: true,
    },
    {
      title: 'Mustang',
      category: 'voiture',
      sold: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  activons(){

    this.texte='Envoi';
    this.bloquer = false;
    this.ecrire=false;
    this.adm = true;
  }
  getStatus(){
    if (this.adm){
      return 'green';
      }
    else{
      return 'red';
      }
  }
  getSoldValue(index: number ){
    if (this.voitures[index].sold){
      return 'green';
      }
    else{
      return 'red';
      }
  }


}
