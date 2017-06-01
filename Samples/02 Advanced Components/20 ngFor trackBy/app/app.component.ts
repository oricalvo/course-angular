import {Component, ElementRef} from "@angular/core";
import {Contact} from "./contact.component";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    contacts: Contact[];

    constructor(private elementRef: ElementRef) {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
        ];
    }

    log() {
        const contacts = this.elementRef.nativeElement.querySelectorAll("my-contact");
        console.log(contacts);

        console.log(this.contacts);
    }

    swap() {
        const tmp = this.contacts[0];
        this.contacts[0] = this.contacts[1];
        this.contacts[1] = tmp;
    }

    add() {
        this.contacts.push({id: 3, name: "Udi"});
    }

    remove() {
        this.contacts.pop();
    }

    refresh() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
        ];
    }

    trackByFn(index, item) {
        return item;
    }
}

