import {Component, ElementRef} from "@angular/core";
import {ClickEvent} from "./click.directive";

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
            {id: 1, name: "Ori", options: {selected: true}},
            {id: 2, name: "Roni", options: {selected: false}},
        ];
    }

    run($event: ClickEvent) {
        console.log("Run");

        $event.promise = new Promise(function(resolve) {
            setTimeout(function() {
                resolve();
            }, 2500);
        });
    }

    select(contact) {
        contact.options.selected = !contact.options.selected;
    }
}

export interface Contact {
    id: number;
    name: string;
    options: any;
}
