import {Component, Inject} from '@angular/core';
import {DATA_TOKEN} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'seed';

  constructor(@Inject(DATA_TOKEN) data) {
    console.log(data);
  }
}
