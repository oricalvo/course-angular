import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonService} from "./common.service";
import {CommonComponent} from "./common.component";

@NgModule({
    declarations: [
        CommonComponent
    ],
    exports: [
        CommonComponent
    ]
})
export class CommonModule {
    constructor() {
        console.log("CommonModule");
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CommonModule,
            providers: [
                CommonService,
            ]
        };
    }

    static forChild(): ModuleWithProviders {
        return {
            ngModule: CommonModule,
            providers: [
            ]
        };
    }
}

@NgModule({
    declarations: [CommonComponent],
    exports: [CommonComponent]
})
export class CommonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CommonModule,
            providers: [
                CommonService,
            ]
        };
    }

    static forChild(): ModuleWithProviders {
        return {
            ngModule: CommonModule,
        };
    }
}
