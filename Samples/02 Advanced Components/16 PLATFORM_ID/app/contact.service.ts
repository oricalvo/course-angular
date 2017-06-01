export class ContactService {
    contacts: Contact[];

    constructor() {
        console.log("ContactService.ctor");

        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];
    }
}

export interface Contact {
    id: number;
    name: string;
}
