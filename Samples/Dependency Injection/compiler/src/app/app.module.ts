import { BrowserModule } from '@angular/platform-browser';
import {Compiler, Injectable, NgModule} from '@angular/core';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {JitCompiler} from '@angular/compiler';

@Injectable()
export class MyClass {
  constructor(config: Config) {
  }
}

export class Config {
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    MyClass,
    Config
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(obj: MyClass) {
    console.log(!!obj);
  }
}
