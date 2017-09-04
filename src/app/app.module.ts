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
import { AuthGuard } from './guards/index';
import { AuthenticationService, UserService } from './services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { fakeBackendProvider } from './helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


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
    MessageComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    routing,
  ],
  providers: [
    BackendService,
    AuthGuard,
    AuthenticationService,
    UserService,

    // fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
