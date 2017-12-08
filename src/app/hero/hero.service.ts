
import {Component, Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock.hero';

@Injectable()
export class HeroService {
   constructor() {}
   getHeroes(): Hero[] {
       return HEROES;
   }
}
