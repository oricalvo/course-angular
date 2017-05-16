import {Component, Input, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "my-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"],
    moduleId: module.id,
})
export class ContactComponent {
    @Input() contact: ContactViewModel;
}

export interface IContactViewModel {
    id?: number;
    name?: string;
    fullName?: string;
}

export class ContactViewModel implements IContactViewModel{
    id: number;
    name: string;
    fullName: string;

    constructor(options: IContactViewModel) {
        this.change(options);
    }

    change(options: IContactViewModel) {
        Object.assign(this, options);
        this.fullName = this.id + ": " + this.name;
    }
}
