import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Message } from '../models/message.model'
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  m: Message;
  // This is temporary, meant to be populated with a http request
  messages: Message[] = [
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
    new Message(1, 'message text goes here', new Date(), 'user_1'),
  ]

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    // this.backendService.getMessages().subscribe(
    //   (messages: Message[]) => this.messages = messages,
    //   (error) => console.log(error)
    // )
  }

  onSend(message: string) {
    this.m = new Message(Math.round(Math.random() * 10000), message, new Date, 'username');
    this.messages.push(this.m);
    this.backendService.postMessage(this.m).subscribe(
      (response) => console.log(response));
  }

  id() {
    return Math.round(Math.random() * 10000);
  }
}
