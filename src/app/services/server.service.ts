import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    storeServers(servers: any[]) {
        return this.http.post('https://ng-testing-35377.firebaseio.com/data.json', servers);
    };


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