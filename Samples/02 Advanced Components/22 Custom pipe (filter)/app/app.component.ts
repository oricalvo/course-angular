import {Component, ElementRef} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    contacts: Contact[];

    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
        ];
    }

    change() {
    }

    add() {
        //this.contacts.push({id:3, name: "Udi"});
        //this.contacts[0] = null;

        this.contacts[0].name = "XXX";
    }

    swap() {
        //const tmp = this.contacts[0];
    }
}

export interface Contact {
    id: number;
    name: string;
}


