import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-model/hero';

@Component({
  selector: 'heroes-all',
  templateUrl: './heroes-all.component.html',
  styleUrls: ['./heroes-all.component.css']
})
export class HeroesAllComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
