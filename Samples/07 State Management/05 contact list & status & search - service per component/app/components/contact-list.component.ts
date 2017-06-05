import {Component, Input} from "@angular/core";
import {ContactService} from "../services/contact.service";
import {SearchService} from "../services/search.service";

@Component({
    selector: "my-contact-list",
    templateUrl: "./contact-list.component.html",
    styleUrls: ["./contact-list.component.css"],
    moduleId: module.id,
})
export class ContactListComponent {
    constructor(private searchService: SearchService) {
    }

    get contacts() {
        return this.searchService.filtered;
    }
}
