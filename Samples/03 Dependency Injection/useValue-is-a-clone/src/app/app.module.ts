import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DATA_TOKEN} from './data.service';

const data = {
  id: 1,
  contact: {
    name: "Ori"
  }
};

data.contact.self = data;

console.log(data);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: DATA_TOKEN, useValue: data},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
