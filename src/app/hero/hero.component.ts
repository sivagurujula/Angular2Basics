
import {Component, OnInit} from '@angular/core';
import { Hero } from 'app/hero/hero';
import { HeroService} from './hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.style.css']
})
export class HeroComponent implements OnInit {
    heroes: Hero[] = [];
    selectedHero: Hero;
    constructor(private heroService: HeroService) {
    }
    ngOnInit() {
        console.log('HeroComponent');
        this.heroes = this.heroService.getHeroes();
    }
    OnSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
