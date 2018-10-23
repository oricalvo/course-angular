import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {connect, ContactIndexComponent, ContactListComponent} from './contact-list/contact-list.component';
import {appStore} from './appStore';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactIndexComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
