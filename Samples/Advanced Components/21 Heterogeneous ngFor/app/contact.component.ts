import {Component, Input} from "@angular/core";

@Component({
    selector: "my-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"],
    moduleId: module.id,
})
export class ContactComponent {
    @Input() item: Contact;

    constructor() {
    }
}

export class Contact {
    constructor(public id, public name, public email) {
    }
}


