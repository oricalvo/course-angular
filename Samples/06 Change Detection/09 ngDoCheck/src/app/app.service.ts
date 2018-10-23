import {Injectable} from '@angular/core';
import {appStore, incVersion} from './appStore';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  refreshContacts() {
    const {$version} = appStore.contacts;

    appStore.contacts = incVersion(appStore.contacts, [
      {'id': 1, 'name': 'Ori'},
      {'id': 2, 'name': 'Roni'},
      {'id': 3, 'name': 'Udi'},
      {'id': 4, 'name': 'Tommy'},
    ]);
  }
}
