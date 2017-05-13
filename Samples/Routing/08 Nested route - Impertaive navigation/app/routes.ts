import {ActivatedRouteSnapshot, RouterStateSnapshot, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {NotFoundComponent} from "./notFound.component";
import {ContactsPageComponent} from "./contactsPage.component";
import {ContactListComponent} from "./contactList.component";

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
    path: 'contact',
    component: ContactsPageComponent,
    children: [
        {
            path: ':type',
            component: ContactListComponent,
        },
    ]
},
    {
        path: '**',
        component: NotFoundComponent,
    },
];
