import {Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {ContactComponent} from "./contact.component";
import {GroupComponent} from "./group.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'contacts',
        component: GroupComponent,
        children: [
            {
                path: 'contact/:id',
                component: ContactComponent,
            },
        ]
    },
    {
        path: '**',
        redirectTo: "",
    },
];
