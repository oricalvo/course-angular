import { Component, OnInit } from '@angular/core';
import {ThemeService} from '../theme.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  constructor(theme: ThemeService) {
    console.log("clock.ctor", theme);
  }

  ngOnInit() {
  }

}
