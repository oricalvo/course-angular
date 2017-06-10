import {Directive, Input, TemplateRef, ViewContainerRef, ViewRef} from "@angular/core";

@Directive({
    selector: "[myFor]"
})
export class ForDirective {
    @Input("myForOf") items: any[];

    constructor(private template: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    }

ngOnChanges() {
    this.viewContainerRef.clear();

    if(this.items) {
        for(let i=0; i<this.items.length; i++) {
            this.viewContainerRef.createEmbeddedView(this.template, {
                index: i,
                $implicit: this.items[i],
            });
        }
    }
}
}

@Directive({
    selector: "[myFor]"
})
export class ForDirective {
    @Input("myForOf") items: any[];

    constructor(private template: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    }
}
