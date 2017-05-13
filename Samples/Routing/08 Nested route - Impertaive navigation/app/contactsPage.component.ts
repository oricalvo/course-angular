import {Component} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Contact, ContactService} from "./contact.service";

@Component({
    selector: "my-contacts-page",
    templateUrl: "./contactsPage.component.html",
    styleUrls: ["./contactsPage.component.css"],
    moduleId: module.id,
})
export class ContactsPageComponent {
    constructor(router: Router, activatedRoute: ActivatedRoute) {
        console.log("router", router);
        console.log("activatedRoute", activatedRoute);
    }
}
