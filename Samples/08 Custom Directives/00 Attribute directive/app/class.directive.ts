import {Directive, ElementRef, Input, IterableDiffers} from "@angular/core";

@Directive({
    selector: "[myClass]",
})
export class ClassDirective {
    @Input("myClass") options: any;

    constructor(private element: ElementRef, private differs: IterableDiffers) {
        console.log(!!differs);
    }

    // ngOnInit() {
    //     console.log("onInit", this.options);
    // }

    ngOnChanges() {
        this.applyChanges();
    }

    private applyChanges() {
        for (let className in this.options) {
            if (this.options[className]) {
                this.element.nativeElement.classList.add(className);
            }
            else {
                this.element.nativeElement.classList.remove(className);
            }
        }
    }
}
