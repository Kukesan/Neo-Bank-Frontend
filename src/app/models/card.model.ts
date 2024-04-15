export interface Card {
    id: number;
    accountNumber: string;
    cardNumber: string;
    cardName: string;
    expirationDate: string;
    cvv: string;
    balance: number;
    cardType: number;
    // user: User;
}