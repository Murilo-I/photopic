import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PhotoListComponent } from './photo-list.component';
import { PhotoRenderComponent } from './photo-render/photo-render.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { PhotoSearchComponent } from './photo-search/photo-search.component';
import { DarkOnHoverModule } from 'src/app/shared/diretivas/dark-on-hover/dark-on-hover.module';

@NgModule({
    declarations: [
        PhotoListComponent, PhotoRenderComponent, LoadButtonComponent, FilterByDescription,
        PhotoSearchComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkOnHoverModule,
        RouterModule
    ]
})
export class PhotoListModule {

}