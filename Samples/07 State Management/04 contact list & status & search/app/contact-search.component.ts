import {Component, Input} from "@angular/core";
import {ContactService} from "./contact.service";

@Component({
    selector: "my-contact-search",
    templateUrl: "./contact-search.component.html",
    styleUrls: ["./contact-search.component.css"],
    moduleId: module.id,
})
export class ContactSearchComponent {
    what: string;

    constructor(private contactService: ContactService) {
    }

    search() {
        this.contactService.search(this.what);
    }

    onWhatChanged(value) {
        this.what = value;

        this.search();
    }
}
