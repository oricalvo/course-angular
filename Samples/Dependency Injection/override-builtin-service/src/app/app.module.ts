import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";

// @Injectable()
// export class MyLocation extends Location {
//   constructor(platformStrategy: LocationStrategy) {
//     super(platformStrategy);
//
//     console.log("xxx");
//   }
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //RouterModule.forRoot([])
  ],
  providers: [
    Location,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    //{provide: Location, useClass: MyLocation},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(location: Location) {
    console.log(location.path());
  }
}
