import {Directive, Input, TemplateRef, ViewContainerRef, ViewRef, Host} from "@angular/core";

@Directive({
    selector: "[myTab]"
})
export class TabDirective {
    pages = [];

    constructor() {
    }

    ngOnInit() {
        console.log("myTab.ngOnInit");
    }

    ngAfterViewInit() {
        console.log("myTab.ngAfterViewInit");
    }

    addPage(page: PageDirective) {
        this.pages.push(page);

        console.log("Add page " + this.pages.length);
    }
}

@Directive({
    selector: "[myPage]"
})
export class PageDirective {
    constructor(private tab: TabDirective) {
    }

    ngOnInit() {
        this.tab.addPage(this);
    }
}
