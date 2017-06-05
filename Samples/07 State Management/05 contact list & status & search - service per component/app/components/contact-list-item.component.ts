import {Component, Input} from "@angular/core";
import {Contact, ContactService} from "../services/contact.service";
import {SelectionService} from "../services/selection.service";

@Component({
    selector: "my-contact-list-item",
    templateUrl: "./contact-list-item.component.html",
    styleUrls: ["./contact-list-item.component.css"],
    moduleId: module.id,
})
export class ContactListItemComponent {
    @Input() contact: Contact;

    constructor(private selectionService: SelectionService) {
    }

    changeSelection(contact, selected) {
        this.selectionService.change(contact, selected);
    }
}
