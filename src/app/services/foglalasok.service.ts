import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoglalasokService {

  constructor(private http: HttpClient) { }


  addFoglalas(data: any): Observable<any>{
    return this.http.post('http://localhost:3000/foglalasok', data);
  }


  
  getFoglalasList(): Observable<any>{
    return this.http.get('http://localhost:3000/foglalasok');
  }
}
