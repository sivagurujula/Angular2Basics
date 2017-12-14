
import {Component, Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock.hero';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/Observable/of';

@Injectable()
export class HeroService {
   constructor() {}
   getHeroes(): Observable<Hero[]> {
       return of(HEROES);
   }
   public getHero(id:number): Hero {
       return HEROES.find(hero => hero.id === id);
   }
}
