import {Component} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";

@Component({
    selector: "my-group",
    templateUrl: "./group.component.html",
    styleUrls: ["./group.component.css"],
    moduleId: module.id,
})
export class GroupComponent {
    contacts: Contact[];
    orderBy: string;

    constructor(private routeState: ActivatedRoute, private router: Router) {
        console.log("GroupComponent.ctor");

        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
        ];

        this.orderBy = routeState.snapshot.params.orderBy || "asc";

        this.sort();
    }

    toggleOrder() {
        this.orderBy = (this.orderBy=="desc" ? "asc" : "desc");

        this.sort();

        this.router.navigate([{orderBy: this.orderBy}]);
    }

    private sort() {
        if(this.orderBy == "asc") {
            this.contacts.sort((c1, c2) => c1.name.localeCompare(c2.name));
        }
        else {
            this.contacts.sort((c1, c2) => c2.name.localeCompare(c1.name));
        }
    }
}

export interface Contact {
    id: number;
    name: string;
}
