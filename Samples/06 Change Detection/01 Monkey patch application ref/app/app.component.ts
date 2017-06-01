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
        const contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
        ];

        this.contacts = [];
        for(var i=0; i<10000; i++) {
            for(let contact of contacts) {
                this.contacts.push({...contact});
            }
        }
    }

    ngDoCheck() {
    }

    none() {
    }

    change() {
        this.contacts[0].name = "XXX";
    }
}

export interface Contact {
    id: number;
    name: string;
}


