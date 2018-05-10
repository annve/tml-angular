import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vbfor',
  templateUrl: './vbfor.component.html',
  styleUrls: ['./vbfor.component.css']
})
export class VbForComponent implements OnInit {
  piraten = ["Jan", "Piet", "Joris", "Korneel"];
  constructor() { }

  ngOnInit() {
  }

}
