import {Component, Input, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

// @Component({
//     selector: "my-contact",
//     templateUrl: "./contact.component.html",
//     styleUrls: ["./contact.component.css"],
//     moduleId: module.id,
// })
// export class ContactComponent {
//     @Input() contact: Contact;
//     fullName: string;
//
//     ngDoCheck() {
//         this.fullName = this.contact.id + ": " + this.contact.name;
//     }
// }

@Component({
    selector: "my-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"],
    moduleId: module.id,
})
export class ContactComponent {
    @Input() contact: Contact;

    get fullName(): string {
        return this.contact.id + ": " + this.contact.name;
    }
}

export interface Contact {
    id: number;
    name: string;
}
