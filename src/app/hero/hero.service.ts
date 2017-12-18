
import {Component, Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock.hero';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { MessageService } from 'app/message.service';
import {map,tap,catchError} from 'rxjs/operators';

const httpOptions = {
    headers : new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable()
export class HeroService {
   constructor(private http: HttpClient,private messageService:MessageService) {}
   private heroesUrl  = 'api/heroes';
   getHeroes(): Observable<Hero[]> {
       //return of(HEROES);
       return this.http.get<Hero[]>(this.heroesUrl)
                .pipe(tap(heroes => this.log('fetched heroes')),
                catchError(this.handleError('getHeroes',[])));
   }
   public getHero(id:number): Observable<Hero> {
       //return HEROES.find(hero => hero.id === id);
       const url = `${this.heroesUrl}/${id}`;
       return this.http.get<Hero>(url).pipe(
         tap(_ => this.log(`fetched hero id=${id}`)),
         catchError(this.handleError<Hero>(`getHero id=${id}`))
       );
   }
   public updateHero(hero: Hero):Observable<any> {
        return this.http.put(this.heroesUrl , hero, httpOptions)
                .pipe(
                    tap(_ => this.log('updated Hero')),
                    catchError(this.handleError<any>('updateHero'))
                );
   }
   /** POST: add a new hero to the server */
addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  /** DELETE: delete the hero from the server */
deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
  
    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }
  searchHero(term:string) : Observable<Hero[]> {
      if(!term.trim){
          return of([]);
      }
      return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
            .pipe(
                tap(_ => this.log(`found heroes matching "${term}"`)),
                catchError(this.handleError<Hero[]>('searchHeroes', []))
            );
  }
   /** Log a HeroService message with the MessageService */
    private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
  private handleError<T>(operation = 'operation',result?:T){
        return(error:any): Observable<T> =>{
            console.error(error);
            this.log(`${operation} failed message:${error.message}`);
            return of(result as T);
        }
  }
}
