import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Message } from '../models/message.model';
import 'rxjs/Rx'; // .map()
import { Observable } from 'rxjs/Observable';

@Injectable ()
export class MessageService {
    

    constructor(private http: Http) {}

    postMessage(message: any) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://ng-testing-35377.firebaseio.com/data.json', message, {headers: headers});
    };

    getMessages() {
        return this.http.get('https://ng-testing-35377.firebaseio.com/data.json').map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        )
    }

    getServers() {
        return this.http.get('https://ng-testing-35377.firebaseio.com/data.json')
          .map(
            (response: Response) => {
              const data = response.json();
              for (const server of data) {
                server.name = 'FETCHED_' + server.name;
              }
              return data;
            }
          )
          .catch(
            (error: Response) => {
              return Observable.throw('Something went wrong');
            }
          );
      }
}