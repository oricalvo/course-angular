import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {Contact} from "./contact.service";

@Component({
    selector: "my-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"],
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
    @Input() contact: Contact;

    constructor() {
    }
}
