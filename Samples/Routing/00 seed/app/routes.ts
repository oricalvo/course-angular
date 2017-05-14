import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, Routes} from "@angular/router";
import {HomeComponent, HomeMoreComponent} from "./home.component";
import {NotFoundComponent} from "./notFound.component";
import {AdminComponent} from "./admin.component";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class InitAppGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(true);
            }, 3000);
        });
    }
}

export const routes: Routes = [
    {
        path: "",
        canActivate: [InitAppGuard],
        children: [
            {
                path: '',
                redirectTo: "home",
                pathMatch: "full",
            },
            {
                path: 'home',
                component: HomeComponent,
                children: [
                    {
                        path: 'more',
                        component: HomeMoreComponent,
                    },
                ],
            },
            {
                path: 'admin',
                component: AdminComponent,
            },
            {
                path: '**',
                component: NotFoundComponent,
            },
        ]
    },
];
