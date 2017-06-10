import {
    Component, Directive, ElementRef, HostListener, Input, IterableDiffers, TemplateRef, ViewChild,
    ViewContainerRef, ViewRef
} from "@angular/core";
import {TooltipService} from "./tooltip.service";
import {TooltipDirective} from "./tooltip.directive";

@Component({
    selector: "my-tooltip",
    templateUrl: "./tooltip.component.html",
    styleUrls: ["./tooltip.component.css"],
    moduleId: module.id,
})
export class TooltipComponent {
    @ViewChild("marker", {read: ViewContainerRef}) marker: ViewContainerRef;
    private viewRef: ViewRef;
    private directive: TooltipDirective;

    constructor(private service: TooltipService) {
    }

    ngOnInit() {
        this.service.register(this);
    }

    show(directive: TooltipDirective, template: TemplateRef<any>) {
        this.destroy();

        this.viewRef = this.marker.createEmbeddedView(template);
        this.directive = directive;
    }

    close(directive: TooltipDirective) {
        if(directive != this.directive) {
            return;
        }

        this.destroy();
    }

    private destroy() {
        if(this.viewRef) {
            this.viewRef.destroy();
            this.viewRef = null;
        }
    }
}
