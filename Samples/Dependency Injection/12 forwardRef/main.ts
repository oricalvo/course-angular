import {Injectable, InjectionToken, ReflectiveInjector, Compiler, Optional, forwardRef, Inject} from "@angular/core";

@Injectable()
class MyService {
    constructor(@Inject(forwardRef(() => Config)) config: Config) {
        console.log(!!config);
    }
}

class Config {
}

const injector = ReflectiveInjector.resolveAndCreate([
    Config,
    MyService,
]);

const obj = injector.get(MyService);
