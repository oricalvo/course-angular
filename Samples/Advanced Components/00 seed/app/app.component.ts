import {Compiler, Component, HostBinding, NgModule, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    constructor(private compiler: Compiler) {
    }

    compileModule() {
        const moduleFactory = this.compiler.compileModuleSync(this.createModule());

        console.log(moduleFactory);
    }

    createModule() {
        @NgModule({
            imports: [CommonModule],
            declarations: []
        })
        class DynamicModule {
        }

        return DynamicModule;
    }
}
