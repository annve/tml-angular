import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vbforuitbr',
  templateUrl: './vbforuitbr.component.html',
  styleUrls: ['./vbforuitbr.component.css']
})

export class VbForuitbrComponent implements OnInit {
  piraten = ["Jan", "Piet", "Joris", "Korneel"];
 // nieuwePiraat: string;

  constructor() { }

  ngOnInit() {
  }

  voegToe(nieuwePiraat){
     // this.piraten.push(this.nieuwePiraat);
     this.piraten.push(nieuwePiraat);
  }

}
