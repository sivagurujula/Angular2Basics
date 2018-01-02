
import {Component, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {map,tap,catchError} from 'rxjs/operators';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { MessageService } from 'app/message.service';
import { Task } from 'app/xlos/task';

const httpOptions = {
    headers : new HttpHeaders({'Content-Type':'application/json'})
};
const bslServer = 'http://envoybsl-dev.pwcinternal.com';
const taskURL = '/MyEngageAuto/restservices/wbsCode/getMassCodeTaskDetails';
const reqParams= {
    requestId: 'TRQ:ab31b5bec330b6b5:66f9e4bd:160106d6ab2:b6a',
    taskId: '501018'
};
@Injectable()
export class XLOSService {
    constructor(private http: HttpClient,private messageService:MessageService) {}
    private tasks:Task[];
    private log(message: string) {
        this.messageService.add('XLOSService: ' + message);
      }
      private handleError<T>(operation = 'operation',result?:T){
            return(error:any): Observable<T> =>{
                console.error(error);
                this.log(`${operation} failed message:${error.message}`);
                return of(result as T);
            }
      }
      public getTaskDetails(): Task[]{
          console.log('Start getTaskDetails');
        this.http
          .get(`${bslServer}${taskURL}?requestId=${reqParams.requestId}&taskId=${reqParams.taskId}`)
          .toPromise()
          .then(response => this.tasks = response as Task[])
          .catch(console.log);
          console.log('End getTaskDetails');
           return this.tasks;  
          
      }
      private parseResponse(response): void {
           this.tasks = response as Task[];
           console.log(response);
           console.log(this.tasks);
      }
      public getTaskDetailsObservable():Observable<Task[]> {
          const url = `${bslServer}${taskURL}?requestId=${reqParams.requestId}&taskId=${reqParams.taskId}`;
          console.log('getTaskDetailsObservable');
          return this.http
          .get<Task[]>(url);
          /*.pipe(
              // map(tasks => tasks),
              tap(h => {
                const outcome = h ? `fetched` : `did not find`;
                this.log(`${outcome} hero id=${reqParams.requestId}`);
              }),
              catchError(this.handleError('getTaskDetailsObservable',[])));*/
      }
}
