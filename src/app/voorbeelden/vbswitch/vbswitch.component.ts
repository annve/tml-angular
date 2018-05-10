import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vbswitch',
  templateUrl: './vbswitch.component.html',
  styleUrls: ['./vbswitch.component.css']
})
export class VbSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  huidigUur(): number{
    let datum = new Date();
    return datum.getHours();
  }
}
