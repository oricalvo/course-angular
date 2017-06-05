import {SelectionService} from "./selection.service";
import {SearchService} from "./search.service";
import {Injectable} from "@angular/core";
import {ContactService} from "./contact.service";

@Injectable()
export class RootService {
    show: boolean;

    constructor(private contactService: ContactService,
                private selectionService: SelectionService,
                private searchService: SearchService) {
    }

    init() {
        const all = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
            {"id": 3, "name": "Udi"},
            {"id": 4, "name": "Tommy"},
        ];

        this.contactService.onChanges(all);
        this.searchService.onChanges(all);

        this.show = true;
    }

    select(contact, selected) {
        this.selectionService.change(contact, selected);
    }

    search(filter: string) {
        this.searchService.search(filter);
    }

    toggleList() {
        this.show = !this.show;
    }
}
