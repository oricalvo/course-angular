import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from "@angular/core";
import {ContactListComponent} from "./contact-list.component";
import {ContactsPageComponent} from "./contacts-page.component";
import {ContactService} from "./contact.service";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    constructor(private contactService: ContactService) {
    }

    change() {
        this.contactService.change();
    }
}
