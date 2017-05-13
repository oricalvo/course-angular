export class ContactService {
    contacts: Contact[];

    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
        ];
    }

    getById(id: number) {
        const contact = this.contacts.find(c => c.id == id);
        if(contact == null) {
            throw new Error("Contact with id: " + id + " was not found");
        }

        return contact;
    }
}

export interface Contact {
    id: number;
    name: string;
}

