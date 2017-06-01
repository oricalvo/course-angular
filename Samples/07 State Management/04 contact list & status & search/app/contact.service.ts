export class ContactService {
    all: Contact[];
    contacts: Contact[];
    selected: Contact[];

    constructor() {
        this.all = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
            {"id": 3, "name": "Udi"},
            {"id": 4, "name": "Tommy"},
        ];

        this.contacts = this.all;

        this.selected = [];
    }

    changeSelection(contact, selected) {
        contact.selected = selected;

        const index = this.selected.findIndex(c => c == contact);

        if(contact.selected) {
            if(index==-1) {
                this.selected.push(contact);
            }
        }
        else {
            if(index != -1) {
                this.selected.splice(index, 1);
            }
        }
    }

    search(what: string) {
        what = what.toLowerCase();
        this.contacts = this.all.filter(c => c.name.toLowerCase().indexOf(what)!=-1);
    }
}

export interface Contact {
    id: number;
    name: string;
    selected?: boolean;
}
