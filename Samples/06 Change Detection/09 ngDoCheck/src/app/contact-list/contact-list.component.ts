import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {appStore, Contact, Versioned} from '../appStore';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListComponent {
  @Input() contacts: Contact[];
}

export function connect(name, componentType, prop, getter: ()=>any) {
  @Component({
    selector: name,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <${componentType} [${prop}]="data"></${componentType}>
    `
  })
  class Connected {
    data: Versioned;

    constructor(private cdr: ChangeDetectorRef) { }

    ngOnInit() {
      this.data = getter();
    }

    ngDoCheck() {
      console.log("ngDoCheck");

      const newData = getter();
      if(this.data.$version != newData.$version) {
        this.cdr.markForCheck();

        this.data = newData;
      }
    }
  }

  return Connected;
}

export const ContactIndexComponent = connect("app-contact-index", "app-contact-list", "contacts", ()=>appStore.contacts);
