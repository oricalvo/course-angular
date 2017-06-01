import {Component} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {Contact, ContactService} from "./contact.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: "my-contact-list",
    templateUrl: "./contactList.component.html",
    styleUrls: ["./contactList.component.css"],
    moduleId: module.id,
})
export class ContactListComponent {
    type: Observable<string>;
    contacts: Contact[];

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.type  = this.activatedRoute.params.map(p => p.type);
    }
}
