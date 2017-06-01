import {Component, Input} from "@angular/core";
import {Contact} from "./app.component";
import {ContactService} from "./contact.service";

@Component({
    selector: "my-contact-list-item",
    templateUrl: "./contact-list-item.component.html",
    styleUrls: ["./contact-list-item.component.css"],
    moduleId: module.id,
})
export class ContactListItemComponent {
    @Input() contact: Contact;

    constructor(private contactService: ContactService) {
    }

    toggleSelection(contact) {
        this.contactService.toggleSelection(contact);
    }
}
