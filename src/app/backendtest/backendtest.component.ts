import { Component } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-backendtest',
  templateUrl: './backendtest.component.html',
  styleUrls: ['./backendtest.component.css']
})
export class BackendtestComponent {
  data = [
    {
      attribute1: 'firstattr',
      attribute2: 'secondattr'
    },
  ];


  constructor(private backendService: BackendService) { }

  ngOnInit() {
  }

  onGet() {
  console.log('get');
    this.backendService.getData().subscribe(
      (response) => console.log(response)
    );
  }

  onPost() {
    console.log("post");
    this.backendService.getMessages().subscribe(
      (messages: any[]) => console.log(messages)
    );
  }

  onClick3() {
    console.log("onclick2");
    this.backendService.postData([{attr: 'string'}]);
  }
}
