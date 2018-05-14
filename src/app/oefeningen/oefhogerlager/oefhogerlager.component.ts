import { Component, OnInit } from '@angular/core';
import { HogerLager} from './hogerlager';

@Component({
  selector: 'oefhogerlager',
  templateUrl: './oefhogerlager.component.html',
  styleUrls: ['./oefhogerlager.component.css']
})
export class OefHogerLagerComponent implements OnInit {
  title: string = "hoger lager";
  hogerLager: HogerLager = new HogerLager();
  gok: number = 0;
  tip: string = "";
  
  aantalBeurten(){
      return this.hogerLager.aantalBeurten;
  }
  
  verwerkGok() {
      this.tip = this.hogerLager.verwerkGok(this.gok);
  }
  
  geraden() {
      return this.hogerLager.geraden;
  }
  
  reset() {
     this.hogerLager.reset();
     this.tip = "";
  }

  constructor() { }

  ngOnInit() {
  }

}
