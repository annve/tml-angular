import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vbif',
  templateUrl: './vbif.component.html',
  styleUrls: ['./vbif.component.css']
})
export class VbIfComponent implements OnInit {
  leeftijd: number;

  constructor() { 
    this.leeftijd = 0;
  }

  ngOnInit() {
  }

}
