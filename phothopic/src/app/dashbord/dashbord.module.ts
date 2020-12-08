import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashbordComponent } from './daskbord.component';
import { DarkOnHoverModule } from '../shared/diretivas/dark-on-hover/dark-on-hover.module';
import { CardModule } from '../shared/components/card/card.module';
import { PhotoModule } from '../photos/photo/photo.module';

@NgModule({
    declarations: [DashbordComponent],
    exports: [DashbordComponent],
    imports: [CommonModule, DarkOnHoverModule, CardModule, PhotoModule, RouterModule]
})
export class DashbordModule {

}