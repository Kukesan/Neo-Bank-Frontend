import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { ModalService } from '../services/modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: Card[] = [
    // {
    //   id: 1,
    //   cardNumber: '**** **** **** **34',
    //   cardName: 'John Doe1',
    //   expirationDate: '12/23',
    //   cvv: '123',
    //   balance: 62120.00,
    //   cardType: 1
    // },
    // {
    //   id: 2,
    //   cardNumber: '**** **** **** **78',
    //   cardName: 'John Doe2',
    //   expirationDate: '12/23',
    //   cvv: '123',
    //   balance: 20500.33,
    //   cardType: 1
    // }
  ];


  cardForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private cardService: CardService, protected modalService: ModalService) {
    this.cardForm = this.fb.group({
      accountNumber: [''],
      cardNumber: [''],
      cardName: [''],
      expirationDate: [''],
      cvv: [''],
      balance: [this.generateRandomBalance()],
      cardType: [0],
    });
  }

  ngOnInit() {

  }

  generateRandomBalance(): number {
    // Generate random balance between 5000 and 50000
    return Math.floor(Math.random() * (50000 - 5000 + 1) + 5000);
  }

  addNewCard() {
    if (this.cardForm.valid) {
      const cardData: Card = this.cardForm.value;
      console.log('Card data:', cardData);

      this.cardService.addCard(cardData).subscribe(
        (response: any) => {
          console.log(response)
        }
      )
    } else {
      console.log("Form is invalid, display error messages or perform other actions");
    }
  }


}
