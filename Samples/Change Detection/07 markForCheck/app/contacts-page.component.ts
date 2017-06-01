import {ChangeDetectionStrategy, Component, Input, ViewChild} from "@angular/core";
import {Contact, ContactListComponent} from "./contact-list.component";

@Component({
    selector: "my-contacts-page",
    templateUrl: "./contacts-page.component.html",
    styleUrls: ["./contacts-page.component.css"],
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsPageComponent {
    @Input() contacts: Contact[];
    @ViewChild("contactList") contactList: ContactListComponent;
    counter: number = 0;

    constructor() {
    }

    notifyChange() {
        ++this.counter;
        this.contactList.notifyChange();
    }
}
