import {Component,OnInit} from '@angular/core';
import { HeroService } from 'app/hero/hero.service';
import { Hero } from 'app/hero/hero';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {debounceTime,distinctUntilChanged,switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-heroSearch',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit{
    constructor(private heroService:HeroService){}
    heroes$:Observable<Hero[]> ;
    private searchTerms = new Subject<string>();
    ngOnInit(){
        this.heroes$ = this.searchTerms
                        .pipe(
                            debounceTime(300),
                            distinctUntilChanged(),
                            switchMap((term:string) => this.heroService.searchHero(term))
                        );
    }
    searchHero(term:string):void {
        this.searchTerms.next(term);
    }
}
