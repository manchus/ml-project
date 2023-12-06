import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { friandises } from './models/modelBD';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FriandisesService {
  baseUrl = 'http://localhost:3000'

private adminStatus : boolean = false;


  constructor(private httpClient: HttpClient) { }

  Friandises():Observable<friandises[]>{
    return this.httpClient.get<friandises[]>(`${this.baseUrl}/friandises`);
  }

  createFriandise(friandises: friandises){
    console.log(friandises);
    return this.httpClient.post<friandises>(`${this.baseUrl}/newFriandise`,friandises).subscribe(
      ()=>{
        console.log("OK");
      },
      (error)=>{
        console.log("Erreur");
      }
    );

  }

  deleteFriandise(id: any){
    console.log(id);
    return this.httpClient.delete(`${this.baseUrl}/delFriandise/${id}`).subscribe(
      ()=>{
        console.log("OK");
      },
      (error)=>{
        console.log("Erreur");
      }
    );

  }

}
