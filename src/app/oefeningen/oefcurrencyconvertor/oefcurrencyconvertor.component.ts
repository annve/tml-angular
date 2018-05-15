import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'oefcurrencyconvertor',
  templateUrl: './oefcurrencyconvertor.component.html',
  styleUrls: ['./oefcurrencyconvertor.component.css']
})
export class OefCurrencyconvertorComponent implements OnInit {
  title = 'Currency convertor';
  bedrag = 0;
  bronMunt: string;
  doelMunt: string;
  wisselkoers = 0;
  private munteenheden: string[];

  constructor(private currencyService: CurrencyService) {   }

  ngOnInit() {
    let rates = this.currencyService.getRates();
    rates.subscribe(
      value => {
        let objWisselkoersen =  value.rates; 
        this.munteenheden = Object.keys(objWisselkoersen);
        this.munteenheden.push("EUR");
        this.munteenheden.sort();
        this.bronMunt = "EUR";
        this.doelMunt = "EUR";
      },
      error => console.error('Error: ' + error)
    );
  }

  converteer(): void{
    let rate = this.currencyService.getRate(this.bronMunt);
    rate.subscribe(
      value => {
        let objWisselkoersen =  value.rates;
        this.wisselkoers = objWisselkoersen[this.doelMunt] * this.bedrag;
      },
      error => console.error('Error: ' + error)
    );
  }
}
