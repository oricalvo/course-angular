import {Component, ElementRef} from "@angular/core";
import {Contact} from "./contact.component";

@Component({
    selector: "my-contact-list",
    templateUrl: "./contactList.component.html",
    styleUrls: ["./contactList.component.css"],
    moduleId: module.id,
})
export class ContactListComponent {
    contacts: Contact[];

    constructor(private elementRef: ElementRef) {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"}
        ];
    }

    ngOnInit() {
        console.log("ngOnInit");

        this.dump();
    }

    ngAfterContentChecked() {
        console.log("ngAfterContentChecked");

        this.dump();
    }

    ngAfterViewChecked() {
        console.log("ngAfterViewChecked");

        this.dump();
    }

    dump() {
        const res = [];

        for(var x of this.elementRef.nativeElement.querySelectorAll("my-contact span.name")) {
            res.push(x);
        }

        console.log(res.map(s=>s.innerText));
    }

    change() {
        this.contacts[0].name = "XXX";
    }
}


