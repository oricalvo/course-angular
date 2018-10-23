import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'seed';

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.querySelector("button").addEventListener("click", ()=> {
      console.log("click");
    });
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }
}
