import {Compiler, Component, HostBinding, NgModule, ViewEncapsulation, ViewContainerRef, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ContactService} from "./contact.service";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    @ViewChild("marker", {read: ViewContainerRef}) marker: ViewContainerRef;
    counter: number;

    constructor(private compiler: Compiler, private contactService: ContactService) {
        this.counter = 0;
    }

    injectTemplate() {
        const moduleType = this.createComponent("<h1>{{state.counter}}</h1>");
    }

    createComponent(template: string) {
        const moduleType = this.createModuleWithComponent(template);
        //const moduleFactory = this.compiler.compileModuleSync(moduleType);
        const moduleFactory = this.compiler.compileModuleAndAllComponentsSync(moduleType);
        const componentFactory = moduleFactory.componentFactories[0];
        const componentRef = this.marker.createComponent(componentFactory);


        componentRef.instance.state = this;

        return moduleType;
    }

    inc() {
        this.counter++;
    }

createModuleWithComponent(template: string) {
    @Component({
        template: template,
    })
    class DynamicComponent {
        constructor(contactService: ContactService) {
            console.log(contactService);
        }
    }

    @NgModule({
        imports: [
            CommonModule
        ],
        declarations: [DynamicComponent],
    })
    class DynamicModule {
    }

    return DynamicModule;
}
}
