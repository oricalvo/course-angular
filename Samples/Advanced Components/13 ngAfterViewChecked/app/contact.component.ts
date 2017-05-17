import {Component, Input} from "@angular/core";

@Component({
    selector: "my-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"],
    moduleId: module.id,
})
export class ContactComponent {
    @Input() contact: Contact;
}

export interface Contact {
    id: number;
    name: string;
}
