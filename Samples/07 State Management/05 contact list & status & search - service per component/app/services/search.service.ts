import {Contact} from "./contact.service";

export class SearchService {
    all: Contact[];
    filtered: Contact[];
    filter: string;

    constructor() {
        this.filtered = [];
        this.filter = "";
    }

    onChanges(all: Contact[]) {
        this.all = all;

        this.apply();
    }

    search(filter: string) {
        this.filter = filter;

        this.apply();
    }

    private apply() {
        const filter = this.filter.toLowerCase();
        this.filtered = this.all.filter(c => c.name.toLowerCase().indexOf(filter)!=-1);
    }
}
