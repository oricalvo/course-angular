import {Directive, Input, TemplateRef, ViewContainerRef, ViewRef} from "@angular/core";

@Directive({
    selector: "[myIf]"
})
export class IfDirective {
    @Input("myIf") condition: boolean;

    private viewRef: ViewRef;

    constructor(private template: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    }

    ngOnChanges() {
        if(this.condition) {
            if(!this.viewRef) {
                this.viewRef = this.viewContainerRef.createEmbeddedView(this.template);
            }
        }
        else {
            if(this.viewRef) {
                this.viewRef.destroy();
                this.viewRef = null;
            }
        }
    }
}
