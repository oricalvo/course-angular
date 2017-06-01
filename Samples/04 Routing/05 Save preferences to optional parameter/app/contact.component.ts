import {Component} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Contact, ContactService} from "./contact.service";

@Component({
    selector: "my-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"],
    moduleId: module.id,
})
export class ContactComponent {
    contact: Contact;

    constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.contact = this.contactService.getById(this.id);
    }

    get id() {
        return this.activatedRoute.snapshot.params.id;
    }

    get showMore() {
        const showMore = this.activatedRoute.snapshot.params.showMore;
        return showMore==="true" || showMore===true;
    }

    async toggleMore() {
        this.router.navigate(
            [
                {showMore: !this.showMore}
            ],
            {
                relativeTo: this.activatedRoute
            });
    }
}

export class ContactComponentGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true;
    }
}
