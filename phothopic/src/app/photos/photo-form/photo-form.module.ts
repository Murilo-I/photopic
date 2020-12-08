import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoFormComponent } from './photo-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrMessageModule } from 'src/app/shared/components/err-message/err-message.module';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';
import { ClickImediatoModule } from 'src/app/shared/diretivas/click-imediato/click-imediato.module';
import { PhotoFormRoutingModule } from './photo-form.routing.module';

@NgModule ({
    declarations: [
        PhotoFormComponent
    ],
    imports: [
        CommonModule, ReactiveFormsModule, FormsModule, ErrMessageModule, 
        PhotoModule, ClickImediatoModule, RouterModule, PhotoFormRoutingModule
    ]
})
export class PhotoFormModule {

}