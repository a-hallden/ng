import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ConversationListComponent } from './conversation-list/conversation-list.component';
import { ConversationItemComponent } from './conversation-list/conversation-item/conversation-item.component';
import { HeaderComponent } from './header/header.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageComponent } from './messages-list/message/message.component';

import { BackendService } from './services/backend.service';

// Auth
import { routing } from './app.routing';

const appRoutes: Routes = [
  // Routes go here
];

@NgModule({
  declarations: [
    AppComponent,
    ConversationListComponent,
    ConversationItemComponent,
    HeaderComponent,
    MessagesListComponent,
    MessageComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    BackendService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
