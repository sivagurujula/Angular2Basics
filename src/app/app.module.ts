import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author.component';
import {AutoGrowDirective} from './autogrow.directive';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailsComponent} from './hero-details/hero-detatils.component'
import {HeroService} from './hero/hero.service';

@NgModule({
  declarations: [
    AppComponent, AuthorComponent, AutoGrowDirective, HeroComponent, HeroDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent, AuthorComponent, HeroComponent]
})
export class AppModule { }
