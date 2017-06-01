export class ContactService {
    contacts: Contact[];

    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
        ];
    }

    change() {
        //this.contacts.push({id:3, name: "Udi"});

        this.contacts[0] = {...this.contacts[0], name: "XXX"};

        this.contacts = this.contacts.concat([{id:3, name: "Udi"}]);
    }
}

export interface Contact {
    id: number;
    name: string;
}
