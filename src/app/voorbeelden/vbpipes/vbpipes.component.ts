import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vbpipes',
  templateUrl: './vbpipes.component.html',
  styleUrls: ['./vbpipes.component.css']
})
export class VbPipesComponent implements OnInit {
  datum = new Date();
  bedrag = 1.2345;
  naam = "barones van Pimperzele";
  toggleDatum = true; // start with true == shortDate

  get datumFormaat()   { return this.toggleDatum ? 'shortDate' : 'fullDate'; }
  toggleDatumFormaat() { this.toggleDatum = !this.toggleDatum; }

  constructor() { }

  ngOnInit() {
  }

}
