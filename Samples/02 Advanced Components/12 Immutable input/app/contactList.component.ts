import {Component, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
import {ContactViewModel} from "./contact.component";

@Component({
    selector: "my-contact-list",
    templateUrl: "./contactList.component.html",
    styleUrls: ["./contactList.component.css"],
    moduleId: module.id,
})
export class ContactListComponent {
    contacts: ContactViewModel[];

    constructor() {
        this.contacts = [
            new ContactViewModel({"id": 1, "name": "Ori", fullName: ""}),
            new ContactViewModel({"id": 2, "name": "Roni", fullName: ""})
        ];
    }

    change() {
        this.contacts[1].change({
            name: this.contacts[1].name + "X"
        });
    }
}


