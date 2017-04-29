import {Injectable, InjectionToken, ReflectiveInjector, Compiler, Optional} from "@angular/core";

class Config {
}

@Injectable()
class MyService {
    constructor(@Optional() config: Config) {
        console.log(!!config);
    }
}

const injector = ReflectiveInjector.resolveAndCreate([
    //Config,
    MyService,
]);

const obj = injector.get(MyService);
