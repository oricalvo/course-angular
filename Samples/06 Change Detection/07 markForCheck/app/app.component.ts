import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from "@angular/core";
import {Contact, ContactListComponent} from "./contact-list.component";
import {ContactsPageComponent} from "./contacts-page.component";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    contacts: Contact[];
    @ViewChild("contactsPage") contactsPage: ContactsPageComponent;

    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
        ];
    }

    ngDoCheck() {
        console.log("App.ngDoCheck");
    }

    change() {
        this.contacts.push({id:3, name: "Udi"});

        this.contactsPage.notifyChange();
    }
}
