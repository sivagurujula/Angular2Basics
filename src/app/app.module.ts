import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author.component';
import {AutoGrowDirective} from './autogrow.directive';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailsComponent} from './hero-details/hero-detatils.component';
import {HeroService} from './hero/hero.service';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {MessageService} from './message.service';
import { HeroSearchComponent } from 'app/hero-search/hero-search.component';


@NgModule({
  declarations: [
    AppComponent,  AuthorComponent, AutoGrowDirective, HeroComponent, HeroDetailsComponent,
    DashboardComponent,HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [HeroService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
