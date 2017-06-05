import {Component, Input} from "@angular/core";
import {ContactService} from "../services/contact.service";
import {SearchService} from "../services/search.service";

@Component({
    selector: "my-contact-search",
    templateUrl: "./contact-search.component.html",
    styleUrls: ["./contact-search.component.css"],
    moduleId: module.id,
})
export class ContactSearchComponent {
    what: string;

    constructor(private searchService: SearchService) {
    }

    search() {
        this.searchService.search(this.what);
    }

    onWhatChanged(value) {
        this.what = value;

        this.search();
    }
}
