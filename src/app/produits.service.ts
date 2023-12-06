import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { produits } from 'src/app/models/modelBD';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  baseUrl = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  Produits(): Observable<produits[]>{
    return this.httpClient.get<produits[]>(`${this.baseUrl}/produits`);
  }
}
