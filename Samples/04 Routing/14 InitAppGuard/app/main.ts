import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
import {routes} from "./routes";

platformBrowserDynamic().bootstrapModule(AppModule).then(()=> {
});

