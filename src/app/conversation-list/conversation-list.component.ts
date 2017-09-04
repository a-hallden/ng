import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Conversation } from '../models/conversation.model'

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.css'],
})
export class ConversationListComponent implements OnInit {
  @Output() conversationSelected = new EventEmitter<Conversation>();

  // This is temporary, meant to be populated with a http request
  conversations: Conversation[] = [
    new Conversation(1, new Date(), 'Conversation name', ['Andreas, Anders, Erika']),
  ];

  constructor() { }

  ngOnInit() {
  }

  onConversationSelected(conversation: Conversation) {
    this.conversationSelected.emit(conversation);
  }
}
