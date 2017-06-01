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
    id: Observable<number>;
    contact: Observable<Contact>;
    name: Observable<string>;
    showMore: Observable<boolean>;
    showMoreCaption: Observable<string>;

constructor(private activatedRoute: ActivatedRoute, private router: Router, private contactService: ContactService) {
    this.id = this.activatedRoute.params.map(p => p.id);
    this.contact = this.id.map(id => contactService.getById(id));
    this.name = this.contact.map(c => c.name);
    this.showMore = this.activatedRoute.params.map(p => p.showMore).map(showMore => (showMore === true || showMore === "true"));
    this.showMoreCaption = this.showMore.map(more => (more ? "Less" : "More"));
}

toggleMore() {
    this.router.navigate(
        [
            {showMore: !getLatestValue(this.showMore)}
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

function getLatestValue<T>(obs: Observable<T>): T {
    let val;
    const subscription = obs.subscribe(v => {
        val = v;
    });

    subscription.unsubscribe();

    return <any>val;
}
