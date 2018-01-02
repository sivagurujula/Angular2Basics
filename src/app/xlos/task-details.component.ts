import {Component,OnInit} from '@angular/core';
import { XLOSService } from 'app/xlos/xlos.service';
import {Task} from './task';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators/debounceTime';

@Component({
    selector: 'app-taskDetails',
    templateUrl:'./task-details.component.html'
})
export class TaskDetailsComponent implements OnInit{
    constructor(private xlosService:XLOSService){}
    tasks:  Task[];
    tasks$:  Task[];
    private delaySubject = new Subject<string>();
    ngOnInit(){
        this.getTaskDetails();
    }
    getTaskDetails():void{
       /* this.tasks$ = this.delaySubject.pipe(
            debounceTime(300),
            this.xlosService.getTaskDetails()
        );*/
        this.delaySubject.pipe(
            debounceTime(300));
        //this.tasks=  this.xlosService.getTaskDetails();
        console.log('TaskDetailsComponent');
        console.log(this.tasks$);
        this.xlosService.getTaskDetailsObservable()
        .subscribe(tasks => this.tasks$ = tasks);
    }
}