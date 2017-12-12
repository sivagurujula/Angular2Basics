import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HeroComponent} from 'app/hero/hero.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
const routes: Routes = [
    {path: '', redirectTo: 'dashboard' , pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: '/heroes', component: HeroComponent}
];
@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {

}