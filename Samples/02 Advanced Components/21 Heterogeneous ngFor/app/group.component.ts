import {Component, Input} from "@angular/core";

@Component({
    selector: "my-group",
    templateUrl: "./group.component.html",
    styleUrls: ["./group.component.css"],
    moduleId: module.id,
})
export class GroupComponent {
    @Input() item: Group;

    constructor() {
    }
}

export class Group {
    items: any[];

    constructor(public id, public name) {
        this.items = [];
    }
}
