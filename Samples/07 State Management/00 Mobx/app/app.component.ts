import {Component, ElementRef} from "@angular/core";
import {Contact, ContactList} from "./contacts";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    contacts: ContactList;
    name: string;

    constructor() {
        this.contacts = new ContactList();
    }

    add() {
        const contact = new Contact(this.name);
        this.contacts.contacts.push(contact);
    }
}

export interface Contact {
    id: number;
    name: string;
}


