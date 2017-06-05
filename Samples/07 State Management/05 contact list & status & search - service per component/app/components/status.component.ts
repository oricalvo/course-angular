import {Component, Input} from "@angular/core";
import {ContactService} from "../services/contact.service";
import {SelectionService} from "../services/selection.service";

@Component({
    selector: "my-status",
    templateUrl: "./status.component.html",
    styleUrls: ["./status.component.css"],
    moduleId: module.id,
})
export class StatusComponent {
    constructor(private selectionService: SelectionService, private contactService: ContactService) {
    }

    get selected() {
        return this.selectionService.selectedCount;
    }

    get total() {
        return this.contactService.all ? this.contactService.all.length : 0;
    }
}
