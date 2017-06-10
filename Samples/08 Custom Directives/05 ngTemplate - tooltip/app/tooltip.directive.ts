import {Directive, ElementRef, HostListener, Input, IterableDiffers, TemplateRef} from "@angular/core";
import {TooltipService} from "./tooltip.service";

@Directive({
    selector: "[myTooltip]",
    exportAs: "tooltip"
})
export class TooltipDirective {
    @Input("myTooltipTemplate") template: TemplateRef<any>;

    constructor(private element: ElementRef, private service: TooltipService) {
    }

    @HostListener("mouseenter")
    private onMouseEnter() {
        this.service.component.show(this, this.template);
    }

    close() {
        this.service.component.close(this);
    }
}
