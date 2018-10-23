import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {from} from 'rxjs/observable/from';
import {map, flatMap, switchMap} from 'rxjs/operators';
import {Action} from '@ngrx/store';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {
    // this.actions$.subscribe(a => {
    //   console.log("action", a);
    // });
  }

  @Effect() inc = this.actions$.pipe(ofType('INC'), map(action => ({ type: 'DO_INC' })));
  @Effect() dec = this.actions$.pipe(ofType('DEC'), map(action => ({ type: 'DO_DEC' })));

  // @Effect() login = this.actions$.pipe(
  //   ofType<LoginAction>('LOGIN'),
  //   flatMap(action => from(sendLoginRequest(action.userName))),
  //   map(userId => ({type: "LOGIN_SUCCESS", userId}))
  // );

  @Effect() login = this.actions$.pipe(
    ofType<LoginAction>('LOGIN'),
    flatMap(action => from(sendLoginRequest(action.userName))),
    map(userId => ({type: "LOGIN_SUCCESS", userId}))
  );
}

let nextRequestId = 1;

async function sendLoginRequest(userName: string): Promise<string> {
  const requestId = nextRequestId++;
  console.log('sendLoginRequest BEGIN', requestId);

  await delay(2500);

  console.log('sendLoginRequest END', requestId);

  return userName + '_' + requestId;
}

export function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

interface LoginAction extends Action {
  userName: string;
}
