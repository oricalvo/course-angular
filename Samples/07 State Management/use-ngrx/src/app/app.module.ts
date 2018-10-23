import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {EffectsModule} from '@ngrx/effects';
import {CounterEffects} from './counter.effects';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './app.store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer,
    }, {
      initialState: {
        counter: 0,
      }
    }),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
