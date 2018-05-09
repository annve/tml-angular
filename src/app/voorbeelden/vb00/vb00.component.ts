import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vb00',
  //templateUrl: './vb00.component.html',
  template: 
  `<h1>Hello Angular 4</h1>
  <h2>{{greeting}}</h2>`,
  styleUrls: ['./vb00.component.css']
})
export class Vb00Component implements OnInit {
  greeting = "Have fun with Angular!";

  constructor() { }

  ngOnInit() {
  }

}
