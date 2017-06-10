import {Directive, ElementRef, Input, IterableDiffers, KeyValueDiffer, KeyValueDiffers} from "@angular/core";

@Directive({
    selector: "[myClass]",
})
export class ClassDirective {
    @Input("myClass") options: any;
    differ: KeyValueDiffer<string, any>;

    constructor(private element: ElementRef, private differs: KeyValueDiffers) {
    }

ngOnChanges() {
    this.differ = this.differs.find(this.options).create();
}

    ngDoCheck() {
        const changes = this.differ.diff(this.options);

        if(changes) {
            changes.forEachAddedItem(item => {
                console.log("forEachAddedItem", item);

                const className = item.key;

                if(item.currentValue) {
                    this.element.nativeElement.classList.add(className);
                }
            });

            changes.forEachRemovedItem(item => {
                console.log("forEachRemovedItem", item);

                const className = item.key;

                if(item.previousValue) {
                    this.element.nativeElement.classList.add(className);
                }
            });

            changes.forEachChangedItem(item => {
                console.log("forEachChangedItem", item);

                const className = item.key;

                if(item.currentValue) {
                    this.element.nativeElement.classList.add(className);
                }
                else {
                    this.element.nativeElement.classList.remove(className);
                }
            });
        }
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
