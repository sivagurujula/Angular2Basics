import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroComponent} from './hero/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from 'app/hero-details/hero-detatils.component';
import { TaskDetailsComponent } from 'app/xlos/task-details.component';
const routes: Routes = [
    {path: '', redirectTo: 'xlos' , pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'heroes', component: HeroComponent},
    {path: 'hero/:id', component: HeroDetailsComponent},
    {path: 'xlos',component:TaskDetailsComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
