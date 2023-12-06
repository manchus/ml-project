import { Component, OnInit } from '@angular/core';
import { produits } from 'src/app/models/modelBD';
import { Observable } from 'rxjs';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-lst-produits',
  templateUrl: './lst-produits.component.html',
  styleUrls: ['./lst-produits.component.css']
})
export class LstProduitsComponent implements OnInit{
  produitsLst$:Observable<produits[]> | undefined;

  constructor(private produitService: ProduitsService) { }

  ngOnInit(): void{
    this.produitsLst$= this.produitService.Produits();

    console.log(this.produitsLst$);

  }

}
