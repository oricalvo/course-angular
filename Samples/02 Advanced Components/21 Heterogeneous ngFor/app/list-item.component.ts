import {Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef} from "@angular/core";

@Component({
    selector: "my-list-item",
    templateUrl: "./list-item.component.html",
    styleUrls: ["./list-item.component.css"],
    moduleId: module.id,
})
export class ListItemComponent {
    @ViewChild("marker", {read: ViewContainerRef})
    marker: ViewContainerRef;

    @Input() item: any;
    @Input() itemToComponentType: any;

    componentRef: ComponentRef<any>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnChanges() {
        if(this.componentRef!=null) {
            this.componentRef.destroy();
            this.componentRef = null;
        }

        if(this.item != null) {
            const componentType = this.itemToComponentType(this.item);
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
            this.componentRef = this.marker.createComponent(componentFactory);
            this.componentRef.instance["item"] = this.item;
        }
    }
}
