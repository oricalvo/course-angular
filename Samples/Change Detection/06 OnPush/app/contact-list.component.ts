import {Component, Input, ChangeDetectionStrategy, ChangeDetectorRef} from "@angular/core";

@Component({
    selector: "my-contact-list",
    templateUrl: "./contact-list.component.html",
    styleUrls: ["./contact-list.component.css"],
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListComponent {
    @Input() contacts: Contact[];
}

export interface Contact {
    id: number;
    name: string;
}
