import {Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {AddressComponent} from "./address.component";
import {WebsiteComponent} from "./website.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'about/:id',
        component: AboutComponent,
        children: [
            {
                outlet: "left",
                path: 'address',
                component: AddressComponent,
            },
            {
                outlet: "right",
                path: 'website',
                component: WebsiteComponent,
            },
        ]
    },
    {
        path: '**',
        redirectTo: "",
    },
];
