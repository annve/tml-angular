import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oef00',
  templateUrl: './oef00.component.html',
  styleUrls: ['./oef00.component.css']
})
export class Oef00Component implements OnInit {
  title = "eenvoudige calculator";
  aantal = 1;
  prijs = 1.25;

  constructor() { }

  ngOnInit() {
  }

}
