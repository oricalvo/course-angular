import {ActivatedRouteSnapshot, RouterStateSnapshot, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
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
    path: 'admin',
    loadChildren: "app/admin/admin.module#AdminModule"
},
    {
        path: '**',
        component: NotFoundComponent,
    },
];
