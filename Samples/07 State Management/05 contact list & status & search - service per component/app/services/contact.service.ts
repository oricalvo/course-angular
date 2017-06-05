export class ContactService {
    all: Contact[];

    constructor() {
    }

    onChanges(all: Contact[]) {
        this.all = all;
    }

    refresh() {
        this.all = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
            {"id": 3, "name": "Udi"},
        ];
    }
}

export interface Contact {
    id: number;
    name: string;
    selected?: boolean;
}
