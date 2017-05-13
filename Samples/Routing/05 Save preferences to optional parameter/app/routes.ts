import {ActivatedRouteSnapshot, RouterStateSnapshot, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {ContactComponent, ContactComponentGuard} from "./contact.component";
import {NotFoundComponent} from "./notFound.component";

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
        path: 'contact/:id',
        component: ContactComponent,
        canActivate: [ContactComponentGuard],
    },
    {
        path: '**',
        component: NotFoundComponent,
        //redirectTo: "",
    },
];
