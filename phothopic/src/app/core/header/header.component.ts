import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$: Observable<User>; //$ == boa prática para identificar objetos do tipo observable

    constructor(private userService: UserService) {
        this.user$ = userService.getUser();
    }

    logout() {
        this.userService.logout(); 
    }
}