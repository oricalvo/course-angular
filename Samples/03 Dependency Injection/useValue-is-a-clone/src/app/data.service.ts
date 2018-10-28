import {Injectable, InjectionToken} from '@angular/core';

export const DATA_TOKEN = new InjectionToken("data");

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}
