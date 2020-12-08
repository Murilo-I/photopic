import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './sign-in/signin.component';
import { ErrMessageModule } from '../shared/components/err-message/err-message.module';
import { SignupComponent } from './sign-up/signup.component';
import { HomeCompoent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignupService } from './sign-up/signup.service';

@NgModule({
    declarations: [SigninComponent, SignupComponent, HomeCompoent],
    imports: [ReactiveFormsModule, FormsModule, CommonModule,
        ErrMessageModule, HomeRoutingModule, RouterModule],
    providers: [SignupService] 
})
export class HomeModule {

}