import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http : HttpClient) { }

  baseUrl = 'this.apiUrl' + "/Cards";

  getAllCards():Observable<Card[]>{ 
    console.log(this.baseUrl);
    return this.http.get<Card[]>(this.baseUrl);
  }

  addCard(card:Card):Observable<Card>{
    return this.http.post<Card>(this.baseUrl,card);
  }
}
