import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:5004/api' ;

  getAllCards(): Observable<Card[]> {
    console.log(this.baseUrl);
    return this.http.get<Card[]>(this.baseUrl);
  }

  addCard(card: Card): Observable<number> {
    const url = `${this.baseUrl}/CardData`; 

    var headers = {
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
      'Content-Type': 'application/json'
    };
    console.log(headers);
    return this.http.post<number>(url, card, { headers });
  }
}
