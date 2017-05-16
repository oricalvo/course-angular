import {Component, Input, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "my-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"],
    moduleId: module.id,
})
export class ContactComponent {
    @Input() contact: Contact;
    counter: number;

    constructor() {
        console.log("contact: ctor");

        this.counter = 0;
    }

    ngOnChanges() {
        console.log("contact: ngOnChanges");
    }

    ngOnInit() {
        console.log("contact: ngOnInit");
    }

    // ngDoCheck() {
    //     console.log("contact: ngDoCheck");
    // }

    ngAfterContentInit() {
        console.log("contact: ngAfterContentInit");
    }

    ngAfterContentChecked() {
        console.log("contact: ngAfterContentChecked");

        ++this.counter;
    }

    ngAfterViewInit() {
        console.log("contact: ngAfterViewInit");
    }

    ngAfterViewChecked() {
        console.log("contact: ngAfterViewChecked");
    }

    ngOnDestroy() {
        console.log("contact: ngOnDestroy");
    }

    delete() {
        console.log("delete");
    }
}

export interface Contact {
    id: number;
    name: string;
}
