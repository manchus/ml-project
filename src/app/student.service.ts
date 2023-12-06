import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { students } from 'src/app/models/modelBD';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  Students(): Observable<students[]>{
    return this.httpClient.get<students[]>(`${this.baseUrl}/studentLst`);
  }

  Student(code: string ): Observable<students>{
    return this.httpClient.get<students>(`${this.baseUrl}/studentRead/?codeaffiche=`+code );
  }

}
