import {Directive, ElementRef, EventEmitter, Output} from "@angular/core";

@Directive({
    selector: "[myClick]",
})
export class ClickDirective {
    @Output("myClick") ev: EventEmitter<any> = new EventEmitter<any>();

    constructor(private element: ElementRef) {
    }

    ngOnInit() {
        this.element.nativeElement.addEventListener("click", () => {
            console.log("Click detected. Waiting ...");

            let element = this.element.nativeElement;
            let caption = element.innerText;
            element.innerText = "Processing ...";

            setTimeout(() => {
                console.log("Emitting click event");

                try {
                    let options: any = {};
                    this.ev.emit(options);

                    if (options.promise) {
                        console.log("Waiting for promise to complete");

                        options.promise.then(() => {
                            console.log("Done");
                            restoreCaption();
                        }).catch(() => {
                            restoreCaption();
                        });
                    }
                    else {
                        restoreCaption();
                    }
                }
                catch(err) {
                    restoreCaption();
                }
            }, 0);

            function restoreCaption() {
                element.innerText = caption;
            }
        });
    }
}

export interface ClickEvent {
    promise: Promise<any>;
}
