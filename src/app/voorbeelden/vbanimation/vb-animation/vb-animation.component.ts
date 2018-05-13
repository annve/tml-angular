import { Component, OnInit } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition } from '@angular/animations';

@Component({
  selector: 'vbanimation',
  templateUrl: './vb-animation.component.html',
  styleUrls: ['./vb-animation.component.css'],
  animations: [
    trigger('toggleState', [
      state('true', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('false',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('true => false', animate('100ms ease-in')),
      transition('false => true', animate('100ms ease-out'))
    ])
  ]
})

export class VbAnimationComponent implements OnInit {
  private state: string = 'true';
  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.state = this.state == 'true'? 'false': 'true';
  }

}
