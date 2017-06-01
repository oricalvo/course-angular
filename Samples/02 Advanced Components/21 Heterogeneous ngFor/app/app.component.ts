import {Component, ElementRef} from "@angular/core";
import {Contact, ContactComponent} from "./contact.component";
import {Group, GroupComponent} from "./group.component";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    items: any[];
    map: Map<any, any>;
    itemToComponentTypeFn: any;

    constructor(private elementRef: ElementRef) {
        this.items = [
            new Group(1, "Friends"),
            new Contact(1, "Ori", "ori@gmail.com"),
        ];

        this.map = new Map<any, any>();
        this.map.set(Contact, ContactComponent)
        this.map.set(Group, GroupComponent);

        this.itemToComponentTypeFn = item => {
            const componentType = this.map.get(item.constructor);
            if(!componentType) {
                throw new Error("Unsupported item type");
            }

            return componentType;
        };
    }
}

