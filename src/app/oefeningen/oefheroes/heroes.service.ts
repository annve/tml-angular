import { Injectable } from '@angular/core';

import { Hero } from './hero-model/hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroesService {
    private heroes: Hero[] = HEROES;
    getHeroes(): Hero[] {
        return this.heroes;
    }
}