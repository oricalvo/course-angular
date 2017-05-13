import {Component} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Component({
    selector: "my-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"],
    moduleId: module.id,
})
export class ContactComponent {
    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        activatedRoute.params.subscribe(value => {
            console.log(value);
        });
    }

    get id() {
        return this.activatedRoute.snapshot.params.id;
    }

    more() {
        this.router.navigate([".", {more: !this.activatedRoute.snapshot.params.more}], {relativeTo: this.activatedRoute});
    }
}

export class ContactComponentGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true;
    }
}
