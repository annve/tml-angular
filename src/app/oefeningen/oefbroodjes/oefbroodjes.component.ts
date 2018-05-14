import { Component, OnInit } from '@angular/core';
import { Broodje, Bestelling, BestelLijn } from './broodje';

@Component({
  selector: 'oefbroodjes',
  templateUrl: './oefbroodjes.component.html',
  styleUrls: ['./oefbroodjes.component.css']
})

export class OefBroodjesComponent implements OnInit {
  title: string = "broodjesoefening";
  broodjes: Broodje[] = [new Broodje("Kaas", 3.10),
  new Broodje("Ham", 2.80),
  new Broodje("Kaas en ham", 4.20),
  new Broodje("Pr\u00E9par\u00E9", 2.30),
  new Broodje("Kip curry", 3.0)];
  aantal: number = 1;
  gekozenBroodje: Broodje = this.broodjes[0];
  bestelling: Bestelling = new Bestelling();

  bestel(): void {
    this.bestelling.voegLijnToe(new BestelLijn(this.gekozenBroodje, this.aantal));
    this.aantal = 1;
  }

  totaalprijs(): number {
    return this.bestelling.totaalprijs();
  }

  constructor() { }

  ngOnInit() {
  }

}
