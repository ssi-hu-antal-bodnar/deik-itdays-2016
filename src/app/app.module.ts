import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRowComponent } from './user-list/user-row/user-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserRowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
