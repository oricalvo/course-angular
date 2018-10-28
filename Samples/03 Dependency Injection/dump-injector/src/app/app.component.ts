import {Component, ComponentFactoryResolver, ElementRef, Injector} from '@angular/core';
import {ThemeService} from './theme.service';
import {ClockComponent} from './clock/clock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    ThemeService
  ]
})
export class AppComponent {
  title = 'seed';
  showClock: false;

  constructor(private injector: Injector, private cfr: ComponentFactoryResolver, private elementRef: ElementRef) {
    console.log(injector);

    const original = injector.get;
    injector.get = function (token) {
      console.log('get', token);

      return original.apply(this, arguments);
    };
  }

  toggle() {
    // this.showClock = !this.showClock;

    const cf = this.cfr.resolveComponentFactory(ClockComponent);
    const compRef = cf.create(this.injector, [], this.elementRef.nativeElement.querySelector(".cont"));
  }
}
