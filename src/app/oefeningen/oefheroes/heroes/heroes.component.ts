import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-model/hero';
// import { HEROES } from '../mock-heroes';
import { HeroesService } from '../heroes.service';
import { HeroesAllComponent } from '../heroes-all/heroes-all.component';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  title = 'Heldenoverzicht';
  toonBeschikbaar = true;
  heroes: Hero[];
  //selectedHero: Hero;

  constructor(private heroesService: HeroesService, 
    private parentComp: HeroesAllComponent) {
  };

  ngOnInit(): void {
    //this.heroes = HEROES;
    this.heroes = this.heroesService.getHeroes();
    //this.selectedHero = this.heroes[0];
    this.parentComp.selectedHero = this.heroes[0];
  }

  onSelect(hero: Hero): void {
     //this.selectedHero = hero;
     this.parentComp.selectedHero = hero;
  }
}
