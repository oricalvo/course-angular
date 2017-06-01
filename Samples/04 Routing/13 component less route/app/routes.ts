import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, Routes} from "@angular/router";
import {HomeComponent, HomeMoreComponent} from "./home.component";
import {NotFoundComponent} from "./notFound.component";
import {AdminComponent} from "./admin.component";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthorizeGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log("canActivate", route);

        return this.authService.isInRole(route.data.roles || ["user"]);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log("canActivateChild", route);

        return this.authService.isInRole(route.data.roles || ["user"]);
    }
}

export const routes: Routes = [
    {
        path: "",
        canActivate: [AuthorizeGuard],
        canActivateChild: [AuthorizeGuard],
        children: [
            {
                path: '',
                redirectTo: "home",
                pathMatch: "full",
            },
            {
                path: 'home',
                component: HomeComponent,
                data: {
                    roles: ["user"],
                },
                children: [
                    {
                        path: 'more',
                        component: HomeMoreComponent,
                        data: {
                            roles: ["user"],
                        }
                    },
                ],
            },
            {
                path: 'admin',
                component: AdminComponent,
                data: {
                    roles: ["admin"],
                },
            },
            {
                path: '**',
                component: NotFoundComponent,
            },
        ]
    },
];
