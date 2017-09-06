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
import { UsersComponent } from './users/users.component';

import { BackendService } from './services/backend.service';
import { MessageService } from './services/message.service';
import { ServerService } from './services/server.service';

// Auth
import { routing } from './app.routing';
// import { AuthGuard } from './guards/auth.guard';
// import { AuthenticationService } from './services/authentication.service';
// import { UserService } from './services/user.service';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// import { fakeBackendProvider } from './helpers/fake-backend';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';
import { BackendtestComponent } from './backendtest/backendtest.component';


const appRoutes: Routes = [
  { path: 'testing', component: BackendtestComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ConversationListComponent,
    ConversationItemComponent,
    HeaderComponent,
    MessagesListComponent,
    MessageComponent,
    // LoginComponent,
    // HomeComponent,
    BackendtestComponent,
    UsersComponent,
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
    // AuthGuard,
    // AuthenticationService,
    // UserService,
    MessageService,
    ServerService,

    // fake backend
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { ServerService } from './services/server.service';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpModule
//   ],
//   providers: [ServerService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
