import {Directive, Input, TemplateRef, ViewContainerRef, ViewRef} from "@angular/core";

@Directive({
    selector: "[myDir1]"
})
export class Dir1Directive {
    constructor(private template: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    }
}

@Directive({
    selector: "[myDir2]"
})
export class Dir2Directive {
    constructor(private template: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    }
}
