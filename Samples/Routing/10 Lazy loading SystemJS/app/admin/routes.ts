import {AdminHomeComponent} from "./home.component";
import {Routes} from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        component: AdminHomeComponent,
        pathMatch: 'full'
    },
];
