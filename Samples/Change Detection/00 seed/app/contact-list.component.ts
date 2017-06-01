import {Component, Input, ChangeDetectionStrategy, ChangeDetectorRef} from "@angular/core";
import {Contact} from "./contact.service";

@Component({
    selector: "my-contact-list",
    templateUrl: "./contact-list.component.html",
    styleUrls: ["./contact-list.component.css"],
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListComponent {
    @Input() contacts: Contact[];

    constructor(private cdr: ChangeDetectorRef) {
    }
}
