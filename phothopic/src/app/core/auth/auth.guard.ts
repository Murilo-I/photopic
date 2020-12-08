import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../user/user.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
            : boolean | Observable<boolean> | Promise<boolean> {

        if(!this.userService.isLoged()) {
            this.router.navigate(['/home'], {
                queryParams: {
                    fromUrl: state.url
                }
            });
            return false;
        }
        return true;
    }
}