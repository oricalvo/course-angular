import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild} from "@angular/core";
import {ContactListComponent} from "./contact-list.component";
import {Contact, ContactService} from "./contact.service";

@Component({
    selector: "my-contacts-page",
    templateUrl: "./contacts-page.component.html",
    styleUrls: ["./contacts-page.component.css"],
    moduleId: module.id,
})
export class ContactsPageComponent {
    contacts: Contact[];

    constructor(private cdr: ChangeDetectorRef, private contactService: ContactService) {
        this.cdr.detach();
    }

    ngDoCheck() {
        console.log("ContactsPage.ngDoCheck");

        if(this.contacts != this.contactService.contacts) {
            console.log("ContactsPage.changed");

            this.contacts = this.contactService.contacts;

            this.cdr.detectChanges();
        }
    }
}
