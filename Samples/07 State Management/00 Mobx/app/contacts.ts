import {computed, observable} from "mobx";

let nextId: number = -1;

export class Contact {
    id: number = Math.random();
    @observable name: string;

    constructor(name: string) {
        this.id = nextId--;
        this.name = name;
    }
}

export class ContactList {
    @observable contacts: Contact[] = [];

    @computed get total() {
        return this.contacts.length;
    }
}
