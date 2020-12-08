import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoDetailModule } from './photo-details/photo-detail.module';

@NgModule({
    imports: [PhotoModule, PhotoListModule, PhotoDetailModule]
})
export class PhotosModule{}