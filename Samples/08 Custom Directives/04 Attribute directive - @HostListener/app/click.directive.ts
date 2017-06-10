import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output} from "@angular/core";
import {Router} from "@angular/router";

@Directive({
    selector: "[myClick]",
    host: {
        "(click)": "onClick($event)",
        //"[disabled]": "disabled"
    }
})
export class ClickDirective {
    @Output("myClick") ev: EventEmitter<any> = new EventEmitter<any>();

    @HostBinding("disabled")
    private disabled: boolean = true;

    constructor(private element: ElementRef) {
    }

    ngOnInit() {
        setTimeout(()=> {
            this.disabled = false;
        }, 2500);
    }

    //@HostListener("click", ["$event"])
    private onClick($event) {
        console.log($event);
    }
}

export interface ClickEvent {
    promise: Promise<any>;
}

@Directive({
    host: {
        "[disabled]": "disabled"
    }
})
export class ClickDirective {
    private disabled: boolean = true;

    ngOnInit() {
        setTimeout(()=> {
            this.disabled = false;
        }, 2500);
    }
}
