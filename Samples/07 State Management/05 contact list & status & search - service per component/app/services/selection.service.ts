export class SelectionService {
    selectedCount: number;

    constructor() {
        this.selectedCount = 0;
    }

    change(contact, selected) {
        if(contact.selected == selected) {
            return;
        }

        if(contact.selected = selected) {
            ++this.selectedCount;
        }
        else {
            --this.selectedCount;
        }
    }
}
