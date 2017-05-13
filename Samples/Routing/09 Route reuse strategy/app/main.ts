import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
import {routes} from "./routes";
import {AboutComponent} from "./about.component";

platformBrowserDynamic().bootstrapModule(AppModule).then(()=> {
});

