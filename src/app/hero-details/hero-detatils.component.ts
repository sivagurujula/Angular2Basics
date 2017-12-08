
import {Component, OnInit, Input } from '@angular/core';
import { Hero } from 'app/hero/hero';

@Component({
    selector: 'app-herodetails',
    templateUrl: './hero-details.component.html'
})
export class HeroDetailsComponent implements OnInit {
    @Input() hero: Hero;
    ngOnInit() {
        console.log('HeroDetailsComponent');
    }
}
