import {Component, Input} from "@angular/core";
import {ContactService} from "../services/contact.service";
import {RootService} from "../services/root.service";

@Component({
    selector: "my-contact-page",
    templateUrl: "./contact-page.component.html",
    styleUrls: ["./contact-page.component.css"],
    moduleId: module.id,
    providers: [ContactService]
})
export class ContactPageComponent {
    constructor(private rootService: RootService) {
    }

    toggle() {
        this.rootService.toggleList();
    }

    get show() {
        return this.rootService.show;
    }
}
