import {Component, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "my-contact-list",
    templateUrl: "./contactList.component.html",
    styleUrls: ["./contactList.component.css"],
    moduleId: module.id,
})
export class ContactListComponent {
    contacts: Contact[];

    constructor() {
        console.log("contactList: ctor");

        this.contacts = [
            {"id": 1, "name": "Ori"},
            //{"id": 2, "name": "Roni"},
        ];
    }

    ngOnChanges() {
        console.log("contactList: ngOnChanges");
    }

    ngOnInit() {
        console.log("contactList: ngOnInit");
    }

    ngDoCheck() {
        console.log("contactList: ngDoCheck");
    }

    ngAfterContentInit() {
        console.log("contactList: ngAfterContentInit");
    }

    ngAfterContentChecked() {
        console.log("contactList: ngAfterContentChecked");
    }

    ngAfterViewInit() {
        console.log("contactList: ngAfterViewInit");
    }

    ngAfterViewChecked() {
        console.log("contactList: ngAfterViewChecked");
    }

    ngOnDestroy() {
        console.log("contactList: ngOnDestroy");
    }
}

export interface Contact {
    id: number;
    name: string;
}
