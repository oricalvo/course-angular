import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./notFound.component";
import {AdminComponent} from "./admin.component";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class CanActivateAdmin implements CanActivate {
    constructor(private authService: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isInRole(route.data.roles);
    }
}

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        data: {
            roles: ["user"],
        }
    },
{
    path: 'admin',
    component: AdminComponent,
    data: {
        roles: ["admin"],
    },
    canActivate: [CanActivateAdmin],
},
    {
        path: '**',
        component: NotFoundComponent,
    },
];

