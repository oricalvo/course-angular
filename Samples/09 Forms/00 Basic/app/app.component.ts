import {Component, ElementRef, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    contacts: Contact[];
    @ViewChild("form") form: NgForm;
    name: string;

    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
        ];
    }

    add() {
      console.log(this.name);
    }
}

export interface Contact {
    id: number;
    name: string;
}


