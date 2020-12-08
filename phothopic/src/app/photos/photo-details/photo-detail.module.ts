import { NgModule } from '@angular/core';
import { PhotoDetailComponent } from './photo-detail.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrMessageModule } from 'src/app/shared/components/err-message/err-message.module';
import { OnlyPhotoOwnerDirective } from './only-photo-owner.directive';
import { ShowIfLoggedModule } from 'src/app/shared/diretivas/show-if-logged/show-if-logged.module';

@NgModule({
    declarations: [PhotoDetailComponent, PhotoCommentsComponent, OnlyPhotoOwnerDirective],
    exports: [PhotoDetailComponent, PhotoCommentsComponent],
    imports: [CommonModule, PhotoModule, ReactiveFormsModule,
                ErrMessageModule, RouterModule, ShowIfLoggedModule]
})
export class PhotoDetailModule {

}