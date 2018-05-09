import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vbdatabinding',
  templateUrl: './vbdatabinding.component.html',
  styleUrls: ['./vbdatabinding.component.css']
})
export class VbDatabindingComponent implements OnInit {
  kolomhoofding: string;
  naam: string;
  voornaam: string;

  constructor() { 
    this.naam = "Vermeulen";
    this.voornaam = "Joske";
  }

  ngOnInit() {
  }

  volledigeNaam(): string{
    return this.voornaam + " " + this.naam.toUpperCase();
  }

  klikHandler(): void{
    alert("Hallo, " + this.volledigeNaam());
  }

}
