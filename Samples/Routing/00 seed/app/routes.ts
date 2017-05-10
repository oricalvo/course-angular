import {Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: "",
    },
];
