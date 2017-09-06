import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../models/message.model'
import { BackendService } from '../services/backend.service';
import { MessageService } from '../services/message.service';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  @ViewChild('msg') msgRef: ElementRef;

  // This is temporary, meant to be populated with a http request
  messages = [
    {
      id: 1,
      message_text: 'message text',
      timestamp: new Date(),
      sent_by: 'hallden',
    }
  ];

  servers = [
    {
      name: 'name',
      id: 1
    },
    {
      name: 'name2',
      id: 2
    },
  ];

  constructor(
    private backendService: BackendService, 
    private messageService: MessageService,
    private serverService: ServerService) { }

  ngOnInit() {
  }

  getMessages() {
    this.messageService.getMessages().subscribe(
      (data: any[]) => this.messages = data,
      (error) => console.log(error),
    );
  }

  onSend() {
    var messageText = this.msgRef.nativeElement.value;
    var message = new Message(this.id(), messageText, new Date, 'username');
    
    this.messageService.postMessage(message).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
    );
    // this.messages.push(message);
  }

  onGet() {
    console.log(this.servers);
    this.messageService.getServers()
      .subscribe(
        (servers: any[]) => this.servers = servers,
        (error) => console.log(error)
      );
  }

  id() {
    return Math.round(Math.random() * 10000);
  }
}
