import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCompoent } from './home.component';
import { LoginGuard } from '../core/auth/login.guard';
import { SigninComponent } from './sign-in/signin.component';
import { SignupComponent } from './sign-up/signup.component';

const routes: Routes = [
    {path: '', component: HomeCompoent, canActivate: [LoginGuard],
        children: [
            {path: '', component: SigninComponent, data:{title:'Sign in'}},
            {path: 'signup', component: SignupComponent, data:{title:'Sign up'}},
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule {

}