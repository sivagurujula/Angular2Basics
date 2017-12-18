
import {Component, OnInit, Input } from '@angular/core';
import { Hero } from 'app/hero/hero';
import { HeroService } from 'app/hero/hero.service';
import {ActivatedRoute} from '@angular/router';
import {Location } from '@angular/common';

@Component({
    selector: 'app-herodetails',
    templateUrl: './hero-details.component.html'
})
export class HeroDetailsComponent implements OnInit {
    hero: Hero;
    constructor(private heroService: HeroService , private route: ActivatedRoute, private location: Location){}
    ngOnInit() {
        console.log('HeroDetailsComponent');
        this.getHero();
    }
    getHero(): void {
        const id  = +this.route.snapshot.params['id'];
        console.log('id: ' + id);
        this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    }
    goBack(): void {
        this.location.back();
    }
    save(hero:Hero): void {
        this.heroService.updateHero(hero)
                .subscribe(() => this.goBack());        
    }
}
